import React from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'
import Fire from './Fire'
import RockAndPaper from './RockAndPaper'
import PaperAndScissors from './PaperAndScissors'
import ScissorsAndRock from './ScissorsAndRock'
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
    this.computerResponse(this.state.userSelection)
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

  async computerResponse(removedField) {
    let computerOptions = this.state.options.filter(
      item => item !== removedField
    )
    let randomNumber = Math.floor(Math.random() * 2)
    await this.setState({
      computerSelection: computerOptions[randomNumber]
    })
  }

  async answerIsPaper() {
    await this.setState({ userSelection: 'Paper' })
    this.checkWhoWin()
  }

  async answerIsRock() {
    await this.setState({ userSelection: 'Rock' })
    this.checkWhoWin()
  }

  async answerIsScissors() {
    await this.setState({ userSelection: 'Scissors' })
    this.checkWhoWin()
  }

  render() {
    return (
      <div className="rock-paper-scissors">
        <h1>Choose!</h1>
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
          <Fire />
        </div>
        <h3 if="result">{this.state.result}</h3>
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
