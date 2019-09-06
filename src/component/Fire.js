import React from 'react'
import '../style/fire.css'

export default class Fire extends React.Component {

  render() {
    return (
      <div className="fire">
        <div className="matches">
          <div className="match"></div>
          <div className="match-two"></div>
          <div className="match-three"></div>
          <div className="match-four"></div>
          <div className="match-five"></div>
          <div className="match-six"></div>
        </div>
      </div>
    )
  }
}
