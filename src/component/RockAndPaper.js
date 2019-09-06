import React from 'react'
import '../style/rock-and-paper.css'

export default class RockAndPaper extends React.Component {
  render() {
    return (
      <div>
        <div className="rock-and-paper">
          <div className="paper-winner"></div>
          <div className="rock-loser"></div>
        </div>
      </div>
    )
  }
}
