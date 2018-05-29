import React, {Component} from 'react'
import './gameboard.css'

export default class GameBoard extends Component {
  render() {
    return (
      <div className='game-layout'>
        <h1>Hundred</h1>
        <h3>Arrested Developers Stadium - Flatiron, NYC</h3>
        <span id="game-score">Score - 0</span> <span id="game-time">Time - 0:00</span>
        <div id="screen">
          <div id="scoreboard">
            <h4 id="home-score"></h4>
            <h4 id="away-score"></h4>
            <h5 id="quarter-gc"></h5>
          </div>
          <hr></hr>
          <img src='http://raylewis.fastback.digital/wp-content/uploads/2016/12/ray-ray-cutout-2.png' className="raylewis animated infinite bounce" alt="RayLewis"/>
          <img src={require('./player.png')} className="animated infinite shake running-player" alt="player" />
          <div id='running-field'></div>
        </div>
      </div>
    )
  }
}
