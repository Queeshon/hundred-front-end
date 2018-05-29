import React, {Component} from 'react'
import './login.css'


export default class Login extends Component {

   state = {
     username: "",
     password: ""
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

onSubmitHandler = (event) => {
  event.preventDefault();
   // fetch('create-user-route', {
   //   method: 'POST',
   //   headers: {
   //     'Content-Type': 'application/json'
   //
   //   },
   //   body: {
   //     'username': {this.state.username},
   //     'password': {this.state.password}
   //   }
   //
   // })
   // .then(resp => resp.json())
   // .then(user => console.log(user))
 }


  render() {
    console.log(this.state.username)
    console.log(this.state.password)
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
