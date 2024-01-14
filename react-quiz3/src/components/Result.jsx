import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ score, count }) => {
  const totalQuestions = 15;
  const incorrectAnswers = totalQuestions - score;

  return (
    <div className='rr'>
      <h1 className='h1'>Result</h1>
      <div className='resultpage'>
        <h3>{score >= 10 ? 'Congratulations!!' : 'You need more practice'}</h3>
        <h1>Your score is {score}</h1>
        <div className='result'>
          <div>
            <h5>Total number of questions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div>
            <h5>{totalQuestions}</h5>
            <h5>{count}</h5>
            <h5>{score}</h5>
            <h5>{incorrectAnswers}</h5>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <Link to='/Quiz'>
          <button className='again'>Play Again</button>
        </Link>
        <Link to='/'>
          <button className='Homebtn'>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;