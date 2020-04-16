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

  // handleLeftClick () event => {
  //   if(this.state.quotesGenerated){
  //     return
  //   }
  //   this.setState({
  //       leftScore: event.target.value
  //     })
  // }

  // handleRightClick () event => {
  //   if(this.state.quotesGenerated){
  //     return
  //   }
  //   this.setState({
  //       rightScore: event.target.value
  //     })
  // }

  render() {
    return (
      <>
        <div className="leftColumn">
          <div className="leftInput">
            <select name="leftCharacter">
              <option value="chuck">Chuck</option>
              <option value="ron">Ron Swanson</option>
              <option value="kanye">Kanye West</option>
              <option value="donald">Donald Trump</option>
            </select>
            <h1>Score: {this.state.leftScore}</h1>
          </div>
          <div className="speechBubble" onClick={this.handleLeftClick}>
            <img alt="speech bubble" />
            <p>speech bubble</p>
          </div>
          <img alt="Left character image" />
          <button>Generate Quote</button>
        </div>
        <div className="rightColumn">
          <div className="rightInput">
            <select name="rightCharacter">
              <option value="chuck">Chuck Norris</option>
              <option value="ron">Ron Swanson</option>
              <option value="kanye">Kanye West</option>
              <option value="donald">Donald Trump</option>
            </select>
            <h1>Score: {this.state.leftScore}</h1>
          </div>
          <div className="speechBubble" onClick={this.rightClickHandler}>
            <img alt="speech bubble" />
            <p>speech bubble</p>
          </div>
          <img alt="Right character image" />
        </div>
      </>
    )
  }
}

export default Game
