import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resource from '../resources/quizQuestion.json';

const quiz = ({ scoreUpdate, countUpdate }) => {
  const [state, setState] = useState({
    q: resource[0].question,
    opta: resource[0].optionA,
    optb: resource[0].optionB,
    optc: resource[0].optionC,
    optd: resource[0].optionD,
    ans: resource[0].answer,
    ct: 0,
    qn: 1,
  });

  const [score, setScore] = useState(0);

  const checkAns = (e) => {
    const { ans } = state;
    console.log(e.target.innerHTML, 'ans =', ans);
    if (e.target.innerHTML === ans) {
      alert('Correct Answer');
      setScore(score + 1);
    } else {
      alert('Wrong Answer');
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    const { ct, qn } = state;
    if (ct + 1 < resource.length) {
      setState((prevState) => ({
        q: resource[prevState.ct + 1].question,
        opta: resource[prevState.ct + 1].optionA,
        optb: resource[prevState.ct + 1].optionB,
        optc: resource[prevState.ct + 1].optionC,
        optd: resource[prevState.ct + 1].optionD,
        ans: resource[prevState.ct + 1].answer,
        ct: prevState.ct + 1,
        qn: qn + 1,
      }));
    }
    if (state.qn === 15) {
      alert('Quiz ended. Click on FINISH to see results.');
    }
  };

  const prevQuestion = () => {
    const { ct, qn } = state;
    if (ct - 1 >= 0) {
      setState((prevState) => ({
        ct: prevState.ct - 1,
        q: resource[prevState.ct - 1].question,
        opta: resource[prevState.ct - 1].optionA,
        optb: resource[prevState.ct - 1].optionB,
        optc: resource[prevState.ct - 1].optionC,
        optd: resource[prevState.ct - 1].optionD,
        ans: resource[prevState.ct - 1].answer,
        qn: qn - 1,
      }));
    }
  };

  const finalResult = () => {
    scoreUpdate(score);
    countUpdate(state.qn);
  };

  const quit = () => {
    alert('Are you sure you want to quit?');
    finalResult();
  };

  return (
    <div className='quiz'>
      <h1>Question</h1>
      <h5>{state.qn} of 15</h5>
      <h3>{state.q}</h3>
      <div className='div'>
        <div>
          <button onClick={checkAns}>{state.opta}</button>
          <button onClick={checkAns}>{state.optb}</button>
        </div>
        <div>
          <button onClick={checkAns}>{state.optc}</button>
          <button onClick={checkAns}>{state.optd}</button>
        </div>
      </div>
      <div className='options'>
        <button className='prev' onClick={prevQuestion}>
          Previous
        </button>
        <button className='next' onClick={nextQuestion}>
          Next
        </button>
        <Link to='/result'>
          <button className='quit' onClick={quit}>
            Quit
          </button>
        </Link>
        <Link to='/result'>
          <button onClick={finalResult}>Finish</button>
        </Link>
      </div>
    </div>
  );
};

export default quiz;