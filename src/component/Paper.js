import React from 'react'
import '../style/paper.css'
export default class Paper extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-of-paper">
          <div className="paper"></div>
          <div className="gushe"></div>
        </div>
      </div>
    )
  }
}
