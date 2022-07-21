import React, { useEffect, useState } from "react";
import chimeStart from "../sounds/chimeStart.mp3";
import chimeStop from "../sounds/chimeStop.mp3";
import candleOn from "../images/candleOn.jpeg";
import candleOff from "../images/candleOff.jpeg";

function Timer(props) {
  const { exercises } = props;
  const [isBgPink, setIsBgPink] = useState(true);
  const [hideButton, setHideButton] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [arrayIndex, setArrayIndex] = useState(0);
  const timesArray = exercises.map((exercise) => exercise.duration);
  const [counter, setCounter] = useState(timesArray[arrayIndex]);
  const namesArray = exercises.map((exercise) => exercise.name);
  const [displayName, setDisplayName] = useState(namesArray[arrayIndex]);

  useEffect(() => {
    if (counter == -1) {
      clearInterval(intervalId);
      const currentIndex = arrayIndex;
      setCounter(timesArray[currentIndex + 1]);
      setArrayIndex(currentIndex + 1);
      setDisplayName(namesArray[currentIndex + 1]);
      setIsBgPink(false);
      playStopSound();
      if (currentIndex != timesArray.length - 1) {
        setTimeout(startCountdown, 10000);
        setTimeout(playStartSound, 10000);
        setTimeout(changeBg, 10000);
      }
    }
  }, [counter]);

  const startCountdown = () => {
    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setIntervalId(id);
    setHideButton(true);
  };

  function playStartSound() {
    var start = new Audio(chimeStart);
    start.play();
  }

  function playStopSound() {
    var stop = new Audio(chimeStop);
    stop.play();
  }

  function changeBg() {
    setIsBgPink(true);
  }

  const styleOn = {
    color: "black",
    backgroundImage: `url(${candleOn})`,
  };

  const styleOff = {
    color: "white",
    backgroundImage: `url(${candleOff})`,
  };

  return (
    <div className="fullTimerWindow" style={isBgPink ? styleOn : styleOff}>
      <div className="timerText">
        {hideButton ? (
          <></>
        ) : (
          <button className="countdownButton" onClick={startCountdown}>
            Start stretching
          </button>
        )}
        <h3>{displayName}</h3>
        <p>{counter}</p>
      </div>
    </div>
  );
}
export default Timer;
