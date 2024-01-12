import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Exercisebar from "./Exercisebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Tab(props) {
  const { exercises, setExercises, totalStretchTime, setTotalStretchTime } =
    props;
  const [newName, setNewName] = useState("");
  const [newDuration, setNewDuration] = useState("60");
  const [error, setError] = useState(false);

  const changeNewName = event => {
    setNewName(event.target.value);
  };

  const changeNewDuration = event => {
    setNewDuration(event.target.value);
  };

  const addExercise = () => {
    if (exercises.length < 12 && newName) {
      const newExercise = {
        id: uuidv4(),
        name: newName,
        duration: parseInt(newDuration),
      };

      setExercises(prevState => [...prevState, newExercise]);
      setError(false);
    } else {
      setError(true);
    }
  };

  const removeExercise = id => {
    if (exercises.length > 1) {
      setExercises(exercises.filter(exercise => exercise.id !== id));
    }
  };

  useEffect(() => {
    setTotalStretchTime(
      exercises
        .map(exercise => exercise.duration)
        .reduce((partialSum, a) => partialSum + a, 0)
    );
  }, [exercises]);

  const editDuration = (id, duration) => {
    setExercises(
      exercises.map(exercise => {
        if (exercise.id === id) {
          exercise.duration = parseInt(duration);
        }
        return exercise;
      })
    );
  };

  const editName = (id, name) => {
    setExercises(
      exercises.map(exercise => {
        if (exercise.id === id) {
          exercise.name = name;
        }
        return exercise;
      })
    );
  };

  return (
    <>
      <div className="tab-body">
        {exercises.map((exercise, i) => (
          <Exercisebar
            key={exercise.id}
            i={i}
            id={exercise.id}
            name={exercise.name}
            duration={exercise.duration}
            removeExercise={removeExercise}
            editDuration={editDuration}
            editName={editName}
          />
        ))}

        <div className="exercise-bar">
          <p className="order">+</p>
          <select value={newDuration} onChange={changeNewDuration}>
            <option value="60">60s</option>
            <option value="45">45s</option>
            <option value="30">30s </option>
            <option value="3">3s (demo)</option>
          </select>
          <input
            placeholder="Exercise name"
            value={newName}
            onChange={changeNewName}
            maxLength="13"
            style={error ? { border: "1.5px solid #b91515" } : {}}
          />
          <button
            onClick={addExercise}
            style={{
              width: "104px",
              backgroundColor: "#9FA0FF",
              padding: "4px 16px",
              color: "white",
              borderRadius: "8px",
              border: "2px solid #9FA0FF",
              margin: "auto",
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> add
          </button>
        </div>
      </div>
      <div>
        <Link className="start-stretching-btn" to="/timer">
          Start stretching
        </Link>
      </div>
    </>
  );
}

export default Tab;
