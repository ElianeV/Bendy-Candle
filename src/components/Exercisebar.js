import React, { useState } from "react";

function Exercisebar(props) {
  const { removeExercise, id, name, duration, editDuration, editName, i } =
    props;
  const [exName, setExName] = useState(name);
  const [exDuration, setExDuration] = useState(duration);

  return (
    <div className="exercise-bar">
      <p>{i + 1}</p>
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
        maxLength="13"
        value={exName}
        onChange={event => setExName(event.target.value)}
        onBlur={() => {
          editName(id, exName);
        }}
      />

      <p>
        <button onClick={() => removeExercise(id)}>Delete</button>
      </p>
    </div>
  );
}

export default Exercisebar;
