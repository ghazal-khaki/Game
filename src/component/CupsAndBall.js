import React from 'react'
import '../style/cups_and_ball.css'

export default class CupsAndBall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
      Ball: Math.random(),
      chosenCup: null,
      result: null
    }
  }
  checkTheAnswer() {
    let x = Math.floor(this.state.Ball * 100)
    if (x > 50 && this.state.chosenCup === 'One') {
      this.setState({ result: 'Congratulation! you win!' })
    } else if (x <= 50 && this.state.chosenCup === 'Two') {
      this.setState({ result: 'Congratulation! you win!' })
    } else {
      this.setState({ result: ' Ops! you lose, try again!' })
    }
  }
  setNewBall() {
    this.setState({ Ball: Math.random(), result: null, chosenCup: null })
  }
  async chosenCupOne() {
    this.setState({ click: !this.state.click })
    if (!this.state.click) {
      await this.setState({ chosenCup: 'One' })
      this.checkTheAnswer()
    } else {
      this.setNewBall()
    }
  }
  async chosenCupTwo() {
    this.setState({ click: !this.state.click })
    if (!this.state.click) {
      await this.setState({ chosenCup: 'Two' })
      this.checkTheAnswer()
    } else {
      this.setNewBall()
    }
  }
  render() {
    let cupClass = !this.state.click ? 'first-cup' : 'second-cup'
    let second = Math.floor(this.state.Ball * 100) <= 50 ? 'second-place-for-ball' : null
    let first = Math.floor(this.state.Ball * 100) <= 50 ? null : 'first-place-for-ball'
    let resultMessage
    if (this.state.result) {
      resultMessage = <h3>{this.state.result}</h3>
    } else {
      resultMessage = <div></div>
    }
    return (
      <div className="cups-and-ball">
        <h1>Where is the ball?</h1>
        <div className="parent-of-cups">
          <div>
            <div onClick={this.chosenCupOne.bind(this)} className={cupClass}>
              <div className="bottom-of-cup"></div>
              <div className="right-side-of-cup"></div>
              <div className="left-side-of-cup"></div>
              <div className="top-of-cup"></div>
            </div>
            <div className={first}></div>
          </div>
          <div>
            <div onClick={this.chosenCupTwo.bind(this)} className={cupClass}>
              <div className="bottom-of-cup"></div>
              <div className="right-side-of-cup"></div>
              <div className="left-side-of-cup"></div>
              <div className="top-of-cup"></div>
            </div>
            <div className={second}> </div>
          </div>
        </div>
        {resultMessage}
      </div>
    )
  }
}
