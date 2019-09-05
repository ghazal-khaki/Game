import React from 'react'
import '../style/rock.css'

export default class Rock extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-of-rock">
          <div className="rock"></div>
        </div>
      </div>
    )
  }
}
