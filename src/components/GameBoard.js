import React, {Component} from 'react'
import Question from './Question'
import { Route, Link, NavLink, Switch, BrowserRouter } from 'react-router-dom'
import './gameboard.css'

export default class GameBoard extends Component {

  state = {
    players: [],
    currentDefensivePlayer: {},
    questions: []
  }

  handleQuestionClicked = () => {

  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/defensive_players")
    .then(response => response.json())
    .then(dps => {
      this.setState({
        players: dps
      })
    })
    fetch("http://localhost:5000/api/v1/questions")
    .then(response => response.json())
    .then(qs => {
      this.setState({
        questions: qs
      })
    })
  }

  renderQuestion = (renderProps) => {
    const questionId = renderProps.match.params.spiceId
    const questionInstance = this.state.questions.find((question) => question.id === questionId)
    if (questionInstance) {
      return <Question questionInstance={questionInstance} />
    }
  }

  render() {

    const questionLinks = this.state.questions.map((question) =>
      <NavLink activeClassName="active" to={ "/question/" + question.id }>
        {question.id}
      </NavLink>
    )

    console.log(this.state.questions);
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
        <button id="0" onClick={this.handleQuestionClicked}>Start Questions</button>
        
      </div>
    )
  }
}
