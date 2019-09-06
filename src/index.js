import React from 'react'
import ReactDom from 'react-dom'
import CupsAndBall from './component/CupsAndBall'
import RockPaperScissors from './component/RockPaperScissors'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './component/Home'
import AnswerIsFire from './component/AnswerIsFire'
import './style/index.css'

class Index extends React.Component {
  Home() {
    return <Home />
  }
  CupsAndBall() {
    return <CupsAndBall />
  }
  RockPaperScissors() {
    return <RockPaperScissors />
  }
  AnswerIsFire() {
    return <AnswerIsFire />
  }
  render() {
    return (
      <Router>
        <div className="index">
          <div>
            <div className="nav">
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/cups-and-ball">
                <button>Cups and Ball</button>
              </Link>
              <Link to="/rock-paper-scissors">
                <button>Rock Paper Scissors</button>
              </Link>
            </div>
            <div className="components">
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/cups-and-ball"
                component={CupsAndBall}
              ></Route>
              <Route
                exact
                path="/rock-paper-scissors"
                component={RockPaperScissors}
              ></Route>
              <Route
                path="/rock-paper-scissors/fire"
                component={AnswerIsFire}
              ></Route>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDom.render(<Index />, document.getElementById('game'))
