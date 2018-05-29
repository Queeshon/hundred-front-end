import React, {Component} from 'react'
import './profile.css'


export default class Profile extends Component {


  render() {
    return (
      <div className='profile-layout'>
        <figure class="snip1336">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
          <figcaption>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" className="profile" />
          <h2>Jay Zonday<span>Flatiron-Student</span></h2>
          <p>Too Legit to Quit</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}
