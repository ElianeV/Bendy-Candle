import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Timer from "./routes/Timer";
import Tab from "./components/Tab";

function App() {
  const [totalStretchTime, setTotalStretchTime] = useState(0);
  const [exercises, setExercises] = useState([
    {
      id: uuidv4(),
      name: "Exercise 1",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Exercise 2",
      duration: 60,
    },
    {
      id: uuidv4(),
      name: "Exercise 3",
      duration: 60,
    },
  ]);
  console.log("app", exercises);
  const [visibleTab, setVisibleTab] = useState(1);

  function updateVisibleTab(id) {
    setVisibleTab(id);
  }

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
                        <span className="right-title-img">
                          <img
                            className="upperbody"
                            src="/images/Upperbody-500px.png"
                            alt="A black woman who is strething her arms overhead and sideways while having her eyes closed."
                          />
                        </span>
                        <br />
                        <span className="left-title-img">
                          <img
                            className="legs"
                            src="/images/Legs-500px.png"
                            alt="Woman's legs doing wheel pose."
                          />
                        </span>
                        accessible to all
                      </h1>
                      <p>
                        Build personalised stretching plans to improve your
                        flexibility. Completely free and truly user-friendly.
                      </p>
                      <a href="#plan-builder">
                        Create your stretching plan
                        <span className="arrow">&#8595;</span>
                      </a>
                    </section>
                  </div>
                  <section className="section features">
                    <Feature />
                  </section>
                  <section id="plan-builder" className="section plan-builder">
                    <h2 style={{ marginBottom: "40px" }}>
                      Create a plan or try out others
                    </h2>
                    <nav role="tablist">
                      <a
                        className={
                          visibleTab === 1 ? "tab-nav active" : "tab-nav"
                        }
                        href="#tab"
                        aria-controls="content1"
                        id="tab1"
                        role="tab"
                        onClick={() => updateVisibleTab(1)}
                      >
                        my plan
                      </a>
                      <a
                        className={
                          visibleTab === 2 ? "tab-nav active" : "tab-nav"
                        }
                        href="#tab"
                        aria-controls="content2"
                        id="tab2"
                        role="tab"
                        onClick={() => updateVisibleTab(2)}
                      >
                        front splits
                      </a>
                      <a
                        className={
                          visibleTab === 3 ? "tab-nav active" : "tab-nav"
                        }
                        href="#tab"
                        aria-controls="content3"
                        id="tab3"
                        role="tab"
                        onClick={() => updateVisibleTab(3)}
                      >
                        side splits
                      </a>
                    </nav>

                    <section id="content" aria-live="polite" role="region">
                      <article
                        id="content1"
                        role="tabpanel"
                        className={
                          visibleTab === 1 ? "tab-visible" : "tab-hidden"
                        }
                      >
                        <Tab
                          totalStretchTime={totalStretchTime}
                          setTotalStretchTime={setTotalStretchTime}
                          exercises={exercises}
                          setExercises={setExercises}
                        />
                      </article>
                      <article
                        id="content2"
                        role="tabpanel"
                        className={
                          visibleTab === 2 ? "tab-visible" : "tab-hidden"
                        }
                      >
                        Tab 2
                      </article>
                      <article
                        id="content3"
                        role="tabpanel"
                        className={
                          visibleTab === 3 ? "tab-visible" : "tab-hidden"
                        }
                      >
                        Tab 3
                      </article>
                    </section>
                    <div className="tab-navigation"></div>
                    <div className="tab-page"></div>
                  </section>
                </>
              }
            />
            <Route path="timer" element={<Timer exercises={exercises} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
