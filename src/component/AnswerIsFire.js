import React from 'react'
import ReactDom from 'react-dom'
import RockPaperScissors from './RockPaperScissors'

export default class AnswerIsFire extends React.Component {
  goToRockPaperScissors() {
    ReactDom.render(<RockPaperScissors />, document.getElementById('game'))
  }
  render() {
    return (
      <div className="answer-is-fire">
        <iframe
          title="fire"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lMCE2cvR7tg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          friends fan? sorry! this project does not support Joey Tribbiani's
          rule maybe in next one!
        </p>
        <button onClick={this.goToRockPaperScissors.bind(this)}>
          <h3>get back to the game</h3>
        </button>
      </div>
    )
  }
}
