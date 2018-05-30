import React, { Component } from 'react';
import GameBoard from './components/GameBoard.js'
import Login from './components/Login.js'
import Profile from './components/Profile.js'

import './App.css';

class App extends Component {

state = {
  loginClicked: false,
  gameClicked: false,
}

handleGameClicked = () => {
    if(!this.state.gameClicked){
      this.setState({
      gameClicked: true
      })
    }else{
      this.setState({
      gameClicked: false
      })
    }
  }

  handleLoginClicked = () => {
    if(!this.state.loginClicked){
      this.setState({
      loginClicked: true
      })
    }else{
      this.setState({
      loginClicked: false
      })
    }
  }

  render() {
    if (this.state.gameClicked){
      return (<GameBoard/>)
    }else if (this.state.loginClicked){
      return (<Login/>)
    }else{
      return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ONE-HUNNID</h1>
            <br></br>
          <img src='https://thestampedenews.org/wp-content/uploads/2017/09/JVfootball.png' className="App-logo" alt="logo" />
        </header>
          <div className='App-intro'>
          <h2 className="animated pulse infinite">CONGRATULATIONS!</h2>
          <p>
          You're now a professional NFL Kick-Returner who needs to travel the length of the football field to score the game winning touchdown, while avoiding the toughest Grid-Iron Legends
           </p>
           <button onClick={this.handleLoginClicked}>Sign-Up</button>
           <button onClick={this.handleGameClicked}>Start Running!</button>
           <button onClick={this.handleProfileClicked}>Profile</button>
        </div>

      </div>
    );
  }
}
}

export default App;
