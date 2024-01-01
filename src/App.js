import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Timer from "./routes/Timer";

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
      name: "Adductor L",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Adductor R",
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
                  <div className="hero-container">
                    <Header />
                    <section className="section hero">
                      <h1>
                        Stretching plans
                        <span className="right-title-img"></span> <br />
                        <span className="left-title-img"></span>
                        accessible to all
                      </h1>
                      <p>
                        Build personalised stretching plans to improve your
                        flexibility. Completely free and truly user-friendly.
                      </p>
                      <button>
                        Create your stretching plan
                        <span>&#2193;</span>
                      </button>
                    </section>
                  </div>
                  <section className="section features">
                    <Feature />
                  </section>
                  <section id="plan-builder" className="section plan-builder">
                    <h2>Create a plan or try out others</h2>
                    <nav role="tablist">
                      <a
                        href="#tab"
                        aria-controls="content1"
                        id="tab1"
                        role="tab"
                      >
                        Stuff1
                      </a>
                      <a
                        href="#tab"
                        aria-controls="content2"
                        id="tab2"
                        role="tab"
                      >
                        Stuff2
                      </a>
                      <a
                        href="#tab"
                        aria-controls="content3"
                        id="tab3"
                        role="tab"
                      >
                        Stuff3
                      </a>
                    </nav>

                    <section id="content" aria-live="polite" role="region">
                      <article id="content1" role="tabpanel">
                        The lazy dog jumped over the quick fox
                      </article>
                      <article id="content2" role="tabpanel">
                        If you click this tab then your life will be better
                      </article>
                      <article id="content3" role="tabpanel">
                        Know your roles
                      </article>
                    </section>
                    <div className="tab-navigation"></div>
                    <div className="tab-page"></div>
                  </section>
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
