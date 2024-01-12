import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Exercisebar(props) {
  const { removeExercise, id, name, duration, editDuration, editName, i } =
    props;
  const [exName, setExName] = useState(name);
  const [exDuration, setExDuration] = useState(duration);

  return (
    <div className="exercise-bar">
      <p className="order">{i + 1}</p>
      <select
        value={exDuration}
        onChange={event => setExDuration(event.target.value)}
        onBlur={() => {
          editDuration(id, exDuration);
        }}
      >
        <option value="60">60s</option>
        <option value="45">45s</option>
        <option value="30">30s</option>
        <option value="3">3s (demo)</option>
      </select>
      <input
        maxLength="35"
        value={exName}
        onChange={event => setExName(event.target.value)}
        onBlur={() => {
          editName(id, exName);
        }}
      />

      <button
        onClick={() => removeExercise(id)}
        style={{
          padding: "4px 16px",
          backgroundColor: "white",
          color: "red",
          borderRadius: "8px",
          border: "2px solid red",
          margin: "auto",
        }}
      >
        <FontAwesomeIcon icon={faXmark} /> delete
      </button>
    </div>
  );
}

export default Exercisebar;
