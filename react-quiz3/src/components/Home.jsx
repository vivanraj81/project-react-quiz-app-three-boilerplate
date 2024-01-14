import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Quiz App</h1>
        <Link to="/quiz">
          <button className='play'>Play</button>
        </Link>
      </div>
    );
  }
}