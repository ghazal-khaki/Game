import React from 'react'
import ReactDom from 'react-dom'
import CupsAndBall from './component/CupsAndBall'
import RockPaperScissors from './component/RockPaperScissors'
import './style/home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choose: null
    }
  }
  goToRockPaperScissors() {
    ReactDom.render(<RockPaperScissors />, document.getElementById('game'))
  }
  goToFlower() {
    ReactDom.render(<CupsAndBall/>, document.getElementById('game'))
  }
  render() {
    return (
      <div className="home">
        <h1>Welcome</h1>
        <p>
          {' '}
          choose each one of the games you want to play and play! you can find
          manual of each game you want to know about bellow its button
        </p>
        <div className="options">
          <button onClick={this.goToFlower.bind(this)}>Cups and Ball</button>
          <button onClick={this.goToRockPaperScissors.bind(this)}>
            Rock Paper Scissors
          </button>
          <div>
          <h3>Rules of Cups and Ball</h3>
          <ul>
            <li>there are two cups and one ball in one of them by random</li>
            <li>you should choose any cups that you guess contains the ball</li>
            <li>if you were right you win! and if you weren't you lose!</li>
            <li>by clicking cups after end of game, new game starts!</li>
          </ul>
          <p>good luck!</p>
          </div>
          <p>say about another game</p>
        </div>
      </div>
    )
  }
}

ReactDom.render(<Home />, document.getElementById('game'))
