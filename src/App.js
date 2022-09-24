import React, { useState } from "react";
import "./App.scss";
import Intro from "./components/main/Intro.js";
import Routinebuilder from "./components/main/Routinebuilder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./routes/Timer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [totalStretchTime, setTotalStretchTime] = useState(0);
  const [exercises, setExercises] = useState([
    {
      id: uuidv4(),
      name: "Hamstring L",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Hamstring R",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Hip flexor L",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Hip flexor R",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Splits L",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Splits R",
      duration: 60,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Navbar /> */}
                  <Intro />
                  <Routinebuilder
                    totalStretchTime={totalStretchTime}
                    exercises={exercises}
                    setTotalStretchTime={setTotalStretchTime}
                    setExercises={setExercises}
                  />
                </>
              }
            />
            <Route
              path="timer"
              element={
                <Timer
                  totalStretchTime={totalStretchTime}
                  exercises={exercises}
                  id={exercises.id}
                  name={exercises.name}
                  duration={exercises.duration}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
