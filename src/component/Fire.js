import React from 'react'
import '../style/fire.css'
import ReactDom from 'react-dom'
import AnswerIsFire from './AnswerIsFire'

export default class Fire extends React.Component {
  answerIsFire() {
    ReactDom.render(<AnswerIsFire />, document.getElementById('game'))
  }
  render() {
    return (
      <div className="fire" onClick={this.answerIsFire.bind(this)}>
        <div>
          <div className="match"></div>
          <div className="match match-two"></div>
          <div className="match match-three"></div>
          <div className="match match-four"></div>
          <div className="match match-five"></div>
          <div className="match match-six"></div>
        </div>
      </div>
    )
  }
}
