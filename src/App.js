import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    text: "State which amongst the following is not an advantage of distributed systems?",
    options: [
      "Resource Sharing",
      "Incremental Growth",
      "Reliability",
      "Process to Process Communication"
    ],
    answer: "Process to Process Communication"
  },
  {
    id: 2,
    text: "Identify the following options if one site fails in a distributed system:",
    options: [
      "The remaining sites can continue operating",
      "Directly connected sites will stop working",
      "All the sites will stop working",
      "A part of the sites will be working"
    ],
    answer: "The remaining sites can continue operating"
  },
  {
    id: 3,
    text: "Identify the below options: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility Transparency",
      "Concurrency Transparency",
      "Replication Transparency",
      "Performance Transparency"
    ],
    answer: "Mobility Transparency"
  },
  {
    id: 4,
    text: "Identify the below options: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility Transparency",
      "Concurrency Transparency",
      "Replication Transparency",
      "Performance Transparency"
    ],
    answer: "Mobility Transparency"
  },
  {
    id: 5,
    text: "Identify the below options: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility Transparency",
      "Concurrency Transparency",
      "Replication Transparency",
      "Performance Transparency"
    ],
    answer: "Mobility Transparency"
  },
  {
    id: 6,
    text: "Identify the below options: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility Transparency",
      "Concurrency Transparency",
      "Replication Transparency",
      "Performance Transparency"
    ],
    answer: "Mobility Transparency"
  },
  {
    id: 7,
    text: "Identify the below options: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility Transparency",
      "Concurrency Transparency",
      "Replication Transparency",
      "Performance Transparency"
    ],
    answer: "Mobility Transparency"
  }
  // Add more questions here if needed
];


const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: option
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalScore = 0;
    for (const question of questions) {
      if (selectedOptions[question.id] === question.answer) {
        totalScore += 5;
      }
    }
    setScore(totalScore);
    setShowPopup(true);
  };

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false);
      }, 660000);
    }
    return () => clearTimeout(timeout);
  }, [showPopup]);

  return (
    <div className="app">
      <h1 className="app-title">Distributed System MCQ</h1>
      <form className="quiz-form">
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p className="question-text">{question.text}</p>
            <div className="options">
              {question.options.map((option) => (
                <label key={option} className="option">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <p className="popup-content">Your score: {score} out of {questions.length * 5}</p>
        </div>
      )}
    </div>
  );
};

export default App;