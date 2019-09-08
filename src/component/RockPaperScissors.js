import React from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'
import Fire from './Fire'
import RockAndPaper from './RockAndPaper'
import PaperAndScissors from './PaperAndScissors'
import ScissorsAndRock from './ScissorsAndRock'
import { Link } from 'react-router-dom'
import '../style/rock-paper-scissors.css'

export default class RockPaperScissors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      computerSelection: null,
      options: ['Rock', 'Paper', 'Scissors'],
      userSelection: null,
      result: null,
      componentAnnouncers: [
        'RockAndPaper',
        'PaperAndScissors',
        'ScissorsAndRock'
      ],
      goalComponent: null,
      announcerComponent: null
    }
  }

  setNewGame() {
    this.setState({
      announcerComponent: null,
      userSelection: null,
      result: null,
      goalComponent: null,
      computerSelection: null
    })
  }
  announceWhoIsWinnerByComponent() {
    let announcerComponent = this.state.componentAnnouncers.find(
      item =>
        item.match(this.state.computerSelection) &&
        item.match(this.state.userSelection)
    )
    this.setState({ announcerComponent: announcerComponent })
  }

  differenceBetweenSelections() {
    return (
      this.state.options.indexOf(this.state.computerSelection) -
      this.state.options.indexOf(this.state.userSelection)
    )
  }

  checkWhoWin() {
    if (Math.abs(this.differenceBetweenSelections()) !== 1) {
      let LIFOBuffer = this.state.options.pop()
      this.state.options.unshift(LIFOBuffer)
    }
    if (this.differenceBetweenSelections() > 0) {
      this.setState({ result: ' Ops! you lose, try again!' })
    } else {
      this.setState({ result: 'Congratulation! you win!' })
    }
    this.setState({ goalComponent: this.announceWhoIsWinnerByComponent() })
  }

  computerResponse(removedField) {
    let computerOptions = this.state.options.filter(
      item => item !== removedField
    )
    let randomNumber = Math.floor(Math.random() * 2)
    this.setState({ computerSelection: computerOptions[randomNumber] }, () =>
      this.checkWhoWin()
    )
  }

  answerIsPaper() {
    if (this.state.userSelection === null) {
      this.setState({ userSelection: 'Paper' }, () => this.computerResponse())
    }
  }

  answerIsRock() {
    if (this.state.userSelection === null) {
      this.setState({ userSelection: 'Rock' }, () => this.computerResponse())
    }
  }

  answerIsScissors() {
    if (this.state.userSelection === null) {
      this.setState({ userSelection: 'Scissors' }, () =>
        this.computerResponse()
      )
    }
  }

  render() {
    let matchState
    if (this.state.result) {
      matchState = (
        <div className="resultTime">
          <h3>{this.state.result}</h3>
          <button onClick={this.setNewGame.bind(this)}>try again</button>
        </div>
      )
    } else {
      matchState = (
        <div className="matchTime">
          <h1>Choose your weapon!</h1>
          <div className="tools">
            <div onClick={this.answerIsPaper.bind(this)}>
              <Paper />
            </div>
            <div onClick={this.answerIsRock.bind(this)}>
              <Rock />
            </div>
            <div onClick={this.answerIsScissors.bind(this)}>
              <Scissors />
            </div>
            <Link to="/rock-paper-scissors/fire">
              <Fire />
            </Link>
          </div>
        </div>
      )
    }
    return (
      <div className="rock-paper-scissors">
        {matchState}
        <div>
          {(() => {
            switch (this.state.announcerComponent) {
              case 'RockAndPaper':
                return <RockAndPaper />
              case 'PaperAndScissors':
                return <PaperAndScissors />
              case 'ScissorsAndRock':
                return <ScissorsAndRock />
              default:
                return <div></div>
            }
          })()}
        </div>
      </div>
    )
  }
}
