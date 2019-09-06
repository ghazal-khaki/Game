import React from 'react'
import Scissors from './Scissors'
import Rock from './Rock'
import '../style/scissors-and-rock.css'

export default class ScissorsAndRock extends React.Component {
  render() {
    return (
      <div>
        <div className="crush">
          <Scissors />
        </div>
        <div className="role-on">
          <Rock />
        </div>
      </div>
    )
  }
}
