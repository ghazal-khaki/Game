import React from 'react'
import Paper from './Paper'
import Scissors from './Scissors'
import '../style/paper-and-scissors.css'

export default class PaperAndScissors extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Paper />
        </div>
        <div className="cut-it">
          <Scissors />
        </div>
      </div>
    )
  }
}
