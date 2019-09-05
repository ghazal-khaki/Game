import React from 'react'
import '../style/scissors.css'

export default class Scissors extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-of-scissors">
          <div className="first">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className="second">
            <div className="one2"></div>
            <div className="two2"></div>
          </div>
        </div>
      </div>
    )
  }
}
