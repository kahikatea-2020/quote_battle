import React, { Component } from "react"

class Game extends Component {
  state = {
    leftScore: 0,
    rightScore: 0,
    leftQuote: "",
    rightQuote: "",
    leftImg: "",
    rightImg: "",
    quotesGenerated: false,
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="leftColumn">
          <div>
            <input>Dropdown of characters</input>
            <h1>Score: {this.state.leftScore}</h1>
          </div>
          <div className="speechBubble">
            <img>speech bubble</img>
            <p>speech bubble</p>
          </div>
          <img>Left character image</img>
          <button>(in the middle) Generate Quote</button>
        </div>
        <div className="rightColumn">
          <div>
            <input>Dropdown of characters</input>
            <h1>Score: {this.state.leftScore}</h1>
          </div>
          <div className="speechBubble">
            <img>speech bubble</img>
            <p>speech bubble</p>
          </div>
          <img>Right character image</img>
        </div>
      </>
    )
  }
}

export default Game
