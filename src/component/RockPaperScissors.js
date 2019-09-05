import React from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'
import Fire from './Fire'
import '../style/rock-paper-scissors.css'

export default class RockPaperScissors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      computerSelection: null,
      options: ['rock', 'paper', 'scissors'],
      userSelection: null,
      result: null
    }
  }
  announceWhoIsWinner() {}
  checkWhoWin() {
    this.computerResponse()
    while (
      Math.abs(
        this.state.options.indexOf(this.state.computerSelection) -
          this.state.options.indexOf(this.state.userSelection)
      ) !== 1
    ) {
      let LIFOBuffer = this.state.options.pop()
      this.state.options.unshift(LIFOBuffer)
    }

    if (
      this.state.options.indexOf(this.state.computerSelection) -
        this.state.options.indexOf(this.state.userSelection) >
      0
    ) {
      this.setState({ result: ' Ops! you lose, try again!' })
    } else {
      this.setState({ result: 'Congratulation! you win!' })
    }
    this.announceWhoIsWinner()
  }
  computerResponse() {
    let randomNumber = Math.floor(Math.random() * 3)
    this.setState({ computerSelection: this.state.options[randomNumber] })
  }
  answerIsPaper() {
    this.setState({ userSelection: 'paper' })
    this.checkWhoWin()
  }
  answerIsRock() {
    this.setState({ userSelection: 'paper' })
    this.checkWhoWin()
  }
  answerIsScissors() {
    this.setState({ userSelection: 'paper' })
    this.checkWhoWin()
  }
  render() {
    return (
      <div className="rock-paper-scissors">
        <h1>Choose!</h1>
        <div className="tools">
          <Paper onClick={this.answerIsPaper.bind(this)} />
          <Rock onClick={this.answerIsRock.bind(this)} />
          <Scissors onClick={this.answerIsScissors.bind(this)} />
          <Fire />
        </div>
        <div>
          <h3 if="result">{this.state.result}</h3>
        </div>
      </div>
    )
  }
}
