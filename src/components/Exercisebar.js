import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Exercisebar(props) {
  const { removeExercise, id, name, duration, editDuration, editName } = props;
  const [exName, setExName] = useState(name);
  const [exDuration, setExDuration] = useState(duration);
  const [edit, setEdit] = useState(false);

  return (
    <div className="exercise-bar">
      {edit ? (
        <>
          <select
            value={exDuration}
            onChange={event => setExDuration(event.target.value)}
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
              setEdit(!edit);
            }}
          />
        </>
      ) : (
        <>
          <p>{exDuration}s</p>
          <p className="name">{name}</p>
        </>
      )}

      <>
        <p>
          <FontAwesomeIcon
            icon={edit ? faSquareCheck : faSquarePen}
            size="2x"
            onClick={() => {
              editDuration(id, exDuration);
              editName(id, exName);
              setEdit(!edit);
            }}
          />

          <FontAwesomeIcon
            icon={faSquareXmark}
            size="2x"
            onClick={() => removeExercise(id)}
          />
        </p>
      </>
    </div>
  );
}

export default Exercisebar;
