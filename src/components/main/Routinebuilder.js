import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Exercisebar from "./Exercisebar";
import Totaltime from "./Totaltime";
import { Link } from "react-router-dom";

function Routinebar(props) {
  const { exercises, setExercises, totalStretchTime, setTotalStretchTime } =
    props;
  const [newName, setNewName] = useState("Exercise name");
  const [newDuration, setNewDuration] = useState("30");
  const [editRoutine, setEditRoutine] = useState(false);

  const changeNewName = (event) => {
    setNewName(event.target.value);
  };

  const changeNewDuration = (event) => {
    setNewDuration(event.target.value);
  };

  const addExercise = () => {
    const newExercise = {
      id: uuidv4(),
      name: newName,
      duration: parseInt(newDuration),
    };

    setExercises((prevState) => [...prevState, newExercise]);
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  useEffect(() => {
    setTotalStretchTime(
      exercises
        .map((exercise) => exercise.duration)
        .reduce((partialSum, a) => partialSum + a, 0)
    );
  }, [exercises]);

  const editDuration = (id, duration) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === id) {
          exercise.duration = parseInt(duration);
        }
        return exercise;
      })
    );
  };

  const editName = (id, name) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === id) {
          exercise.name = name;
        }
        return exercise;
      })
    );
  };

  return (
    <div className="routinebuilder">
      <h1>Routine Builder</h1>
      <div className="routineElements">
        <div className="routineTitle">FRONT SPLITS *</div>
        <div className="exerciseContainer">
          {exercises.map((exercise) => (
            <Exercisebar
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              duration={exercise.duration}
              removeExercise={removeExercise}
              editRoutine={editRoutine}
              editDuration={editDuration}
              editName={editName}
            />
          ))}
        </div>
        {editRoutine ? (
          <div className="addExercise">
            <input value={newName} onChange={changeNewName} />
            <select value={newDuration} onChange={changeNewDuration}>
              <option value="60">60 seconds</option>
              <option value="45">45 seconds</option>
              <option value="30">30 seconds</option>
            </select>
            <button onClick={addExercise}>Add Exercise</button>
          </div>
        ) : (
          <div className="editExButtonDiv">
            <button
              className="editExButton"
              type="button"
              onClick={() => setEditRoutine(true)}
            >
              Edit Routine
            </button>
          </div>
        )}
        <Totaltime className="totalTime" totalStretchTime={totalStretchTime} />
        <Link className="startTimerLink" to="/timer">
          READY!
        </Link>
        <div className="reference">
          <div className="referenceText">
            * This routine is inspired by{" "}
            <a href="https://natachaoceane.com" target="blank">
              Natacha Océane
            </a>
            's{" "}
            <a
              href="https://www.youtube.com/watch?v=yHksRj6285A"
              target="blank"
            >
              video
            </a>
            . Practice at least 5 times a week to improve range of motion.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routinebar;
