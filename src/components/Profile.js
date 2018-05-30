import React, {Component} from 'react'
import './profile.css'


export default class Profile extends Component {

  onEditHandler = () => {
    // event.preventDefault();
    //  fetch('http://localhost:5000/api/v1/users/', {
    //    method: 'PATCH',
    //    headers: {
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({
    //      'username': this.state.username,
    //    })
    //
    //  })
    //  .then(resp => resp.json())
    //  .then(user => console.log(user))
    return (
      <form>
      </form>
    )
   }

 onDeleteHandler = (event) => {
   event.preventDefault();
    fetch('http://localhost:5000/api/v1/users', {
      method: 'DELETE'
    })
  }

  render() {
    return (
      <div className='profile-layout'>
        <figure class="snip1336">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
          <figcaption>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" className="profile" />
          <h2>{this.props.username}</h2>
          </figcaption>
        </figure>
        <button onClick={this.onEditHandler}>Edit Profile</button>
        <button onClick={this.onDeleteHandler}>Delete Profile</button>
      </div>
    );
  }
}
