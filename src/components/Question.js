import React, {Component} from 'react'

export default class Question extends Component {

  state = {
    answer: ""
  }

  onChangeAnswerHandler = (event) => {
    this.setState({
      answer: event.target.value
    })
  }

  handleQuestion = () => {
    if (this.props.questionInstance.answer === this.state.answer) {
      return (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Correct!</p>
          </div>
        </div>
      )
    } else {
      return (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Try again, loser.</p>
          </div>
        </div>
      )
    }
  }

  render() {
    const questionInstance = this.props.questionInstance
    return (
      <form onSubmit={this.handleQuestion}>
        <h1>{questionInstance.question}</h1>
        <input className="form-data" type="text" placeholder="enter answer" value={this.state.answer} onChange={this.onChangeAnswerHandler} />
        <input type="submit" />
      </form>
    )
  }

}
