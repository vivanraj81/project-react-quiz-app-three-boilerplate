import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';  // Updated component name to follow conventions
import Result from './components/Result';  // Updated component name to follow conventions

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleScore = (newScore) => setScore(newScore);
  const handleCount = (newCount) => setCount(newCount);

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz scoreUpdate={handleScore} countUpdate={handleCount} />} />
        <Route path='/result' element={<Result score={score} count={count} />} />
      </Routes>
    </div>
  );
}

export default App;
