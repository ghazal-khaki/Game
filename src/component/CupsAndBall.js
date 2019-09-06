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
    let cupClass = !this.state.click ? 'all' : 'all-second'
    let second = Math.floor(this.state.Ball * 100) <= 50 ? 'circle' : null
    let first = Math.floor(this.state.Ball * 100) <= 50 ? null : 'circle-second'
    let resultMessage
    if (this.state.result) {
      resultMessage = <h3>{this.state.result}</h3>
    } else {
      resultMessage = <div></div>
    }
    return (
      <div className="cups-and-ball">
        <h1>Where is the ball?</h1>
        <div className="parent">
          <div>
            <div onClick={this.chosenCupOne.bind(this)} className={cupClass}>
              <div className="right"></div>
              <div className="cup"></div>
              <div className="cup2"></div>
              <div className="last"></div>
            </div>
            <div className={first}></div>
          </div>
          <div>
            <div onClick={this.chosenCupTwo.bind(this)} className={cupClass}>
              <div className="right"></div>
              <div className="cup"></div>
              <div className="cup2"></div>
              <div className="last"></div>
            </div>
            <div className={second}> </div>
          </div>
        </div>
        {resultMessage}
      </div>
    )
  }
}
