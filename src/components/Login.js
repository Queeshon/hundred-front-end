import React, {Component} from 'react'
import Profile from './Profile'
import './login.css'


export default class Login extends Component {

   state = {
     username: "",
     password: "",
     profileClicked: false
   }

   onChangeUserHandler = (event) => {
     this.setState({
       username: event.target.value
     })
   }

   onChangePassHandler = (event) => {
     this.setState({
       password: event.target.value
     })
   }


   handleProfileClicked = () => {
     if(!this.state.profileClicked){
       this.setState({
       profileClicked: true
       })
     }else{
       this.setState({
       profileClicked: false
       })
     }
   }

  onSubmitHandler = (event) => {
    event.preventDefault();
     fetch('http://localhost:5000/api/v1/users/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         'username': this.state.username,
         'password': this.state.password
       })

     })
     .then(resp => resp.json())
     .then(user => {
       return <Profile username={this.state.username}/>
     })
   }


  render() {
    return (

      <div className='login-layout'>
      <h3>Sign-Up to Save Your Score and Create a Personal Profile</h3>
        <form id="login-form" onSubmit={this.onSubmitHandler}>


          <input className="form-data" type="text" placeholder="enter username" value={this.state.username} onChange={this.onChangeUserHandler} />
          <input className="form-data" type="password" placeholder="enter password" value={this.state.password} onChange={this.onChangePassHandler} />
        <input id="submit" type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}
