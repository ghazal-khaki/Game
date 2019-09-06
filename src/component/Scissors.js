import React from 'react'
import '../style/scissors.css'

export default class Scissors extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-of-scissors">
          <div className="first-pair-of-scissors">
            <div className="blade-of-first-pair-of-scissors"></div>
            <div className="handle-of-first-pair-of-scissors"></div>
            <div className="pin-of-scissors"></div>
          </div>
          <div className="second-pair-of-scissors">
            <div className="blade-of-second-pair-of-scissors"></div>
            <div className="handle-of-second-pair-of-scissors"></div>
          </div>
        </div>
      </div>
    )
  }
}
