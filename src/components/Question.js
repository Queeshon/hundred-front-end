import React, {Component} from 'react'

export default class Question extends Component {

  render() {
    console.log(this.props.questionInstance);
    return (
      <form onSubmit={this.handleQuestion}>

      </form>
    )
  }

}
