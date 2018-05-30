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

  handleQuestion = (event) => {
    event.preventDefault()
    var modal = document.getElementById('myModal')
    modal.style.display = "block"

    if (this.props.questionInstance.answer === this.state.answer) {
      var correct = document.getElementById('correct?')
      var btn = document.getElementById("myBtn")

      correct.innerText = "Correct!"

      window.onClick = function(event) {
          if (event.target !== modal) {
              modal.style.display = "none";
          }
      }
    } else {
      var correct = document.getElementById('correct?')
      var btn = document.getElementById("myBtn")

      correct.innerText = "Try again."

      window.onClick = function(event) {
        if (event.target !== modal) {
            modal.style.display = "none";
        }
      }
    }
  }

  closeModal = () => {
    var modal = document.getElementById('myModal')
    modal.style.display = "none"
  }

  render() {
    const questionInstance = this.props.questionInstance

    return (
      <div>
        <form onSubmit={this.handleQuestion}>
          <h1>{questionInstance.question}</h1>
          <input className="form-data" type="text" placeholder="enter answer" value={this.state.answer} onChange={this.onChangeAnswerHandler} />
          <input type="submit"/>
        </form>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p id="close" className="close" onClick={this.closeModal}>X</p>
            <h2 id="correct?"></h2>
          </div>
        </div>
      </div>
    )
  }

}
