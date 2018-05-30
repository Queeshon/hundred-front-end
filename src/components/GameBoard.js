import React, {Component} from 'react'
import Question from './Question'
import { Route, Link, NavLink, Switch} from 'react-router-dom'
import './gameboard.css'

export default class GameBoard extends Component {

  state = {
    players: [],
    questions: [],
    question: {}
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
    const questionId = renderProps.match.params.id
    const questionInstance = this.state.questions.find((question) => question.id == questionId)
    console.log(renderProps)
    if (questionInstance) {
      return <Question questionInstance={questionInstance} />
    } else {
      return <div></div>
    }
  }

  render() {
    const questionLinks = this.state.questions.map((question) =>
      <NavLink activeClassName="active" to={ "/question/" + question.id }>
        <button>{question.id}</button>
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
        {questionLinks}
        <Route path="/question/:id" exact render={this.renderQuestion}/>
      </div>
    )
  }
}
