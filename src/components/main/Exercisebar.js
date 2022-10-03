import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Exercisebar(props) {
  const {
    removeExercise,
    editRoutine,
    id,
    name,
    duration,
    editDuration,
    editName,
  } = props;
  const [exName, setExName] = useState(name);
  const [exDuration, setExDuration] = useState(duration);
  const [edit, setEdit] = useState(false);

  return (
    <div className="exerciseBar">
      {edit ? (
        <>
          <input
            maxlength="13"
            value={exName}
            onChange={(event) => setExName(event.target.value)}
          />
          <select
            value={exDuration}
            onChange={(event) => setExDuration(event.target.value)}
          >
            <option value="3">3 s (demo)</option>
            <option value="30">30 s</option>
            <option value="45">45 s</option>
            <option value="60">60 s</option>
          </select>
        </>
      ) : (
        <>
          <p>{name}</p>
          <p>{exDuration} s</p>
        </>
      )}
      {editRoutine && (
        <>
          <p>
            <FontAwesomeIcon
              icon={edit ? faSquareCheck : faSquarePen}
              className="editButton"
              size="2x"
              style={{ padding: "0px 10px" }}
              onClick={() => {
                editDuration(id, exDuration);
                editName(id, exName);
                setEdit(!edit);
              }}
            />

            <FontAwesomeIcon
              className="deleteButton"
              icon={faSquareXmark}
              style={{ padding: "0px 10px" }}
              size="2x"
              onClick={() => removeExercise(id)}
            />
          </p>
        </>
      )}
    </div>
  );
}

export default Exercisebar;
