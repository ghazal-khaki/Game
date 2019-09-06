import React from 'react'
import '../style/home.css'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <h1>Welcome</h1>
          <p>
            Read the manual in bellow, choose game in menu and play. wish you be
            winner! good luck!
          </p>
          <div className="Rules">
            <div>
              <h3>Rules of cups and ball</h3>
              <ul>
                <li>
                  there are two cups and one ball in one of them by random
                </li>
                <li>
                  you should choose any cups that you guess contains the ball
                </li>
                <li>if you were right you win! and if you weren't you lose!</li>
                <li>by clicking cups after end of game, new game starts!</li>
              </ul>
            </div>
            <div>
              <h3>Rules of rock, paper, Scissors</h3>
              <ul>
                <li>choose from these three tools</li>
                <li>
                  computer will choose from other options by random, so there is
                  always one winner!
                </li>
                <li>
                  remember scissors wins paper by cutting it, paper wins rock by
                  covering it and rock wins scissors by crushing it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
