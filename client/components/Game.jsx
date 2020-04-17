import React, { Component } from "react"
import {
  getChuckRandomJoke,
  getKanyeQuote,
  getTonaldRandomQuote,
  getRonRandomQuote,
} from "../api/index"

class Game extends Component {
  state = {
    leftScore: 0,
    rightScore: 0,
    leftQuote: "",
    rightQuote: "",
    leftCharacter: "chuck",
    rightCharacter: "chuck",
    quotesGenerated: false,
  }
  
  
  componentDidMount() {
    this.setState({ leftQuote: "loading...", rightQuote: "loading..." })
    this.leftApiHandler()
    this.rightApiHandler()
    this.setState({ quotesGenerated: true })
  }

  rightApiHandler = () => {
    switch (this.state.rightCharacter) {
      case "chuck":
        getChuckRandomJoke().then((res) => {
          this.setState({rightQuote: res})
        })
        break
      case "kanye":
        getKanyeQuote().then((res) => {
          this.setState({rightQuote: res})
        })
        break
      case "donald":
        getTonaldRandomQuote().then((res) => {
          this.setState({rightQuote: res})
        })
        break
      case "ron":
        getRonRandomQuote().then((res) => {
          this.setState({rightQuote: res})
        })
        break
    }
  }

  leftApiHandler = () => {
    switch (this.state.leftCharacter) {
      case "chuck":
        getChuckRandomJoke().then((res) => {
          this.setState({leftQuote: res})
        })
        break
      case "kanye":
        getKanyeQuote().then((res) => {
          this.setState({leftQuote: res})
        })
        break
      case "donald":
        getTonaldRandomQuote().then((res) => {
          this.setState({leftQuote: res})
        })
        break
      case "ron":
        getRonRandomQuote().then((res) => {
          this.setState({leftQuote: res})
        })
        break
    }
  }

  handleLeftClick = () => {
    this.state.quotesGenerated &&
      this.setState({
        leftScore: this.state.leftScore + 1,
        quotesGenerated: false,
      })
  }

  handleRightClick = () => {
    this.state.quotesGenerated &&
      this.setState({
        rightScore: this.state.rightScore + 1,
        quotesGenerated: false,
      })
  }

  handleLeftChange = (event) => {
    this.setState({
      leftCharacter: event.target.value,
    })
  }

  handleRightChange = (event) => {
    this.setState({
      rightCharacter: event.target.value,
    })
  }

  resetGame = (event) => {
    this.setState({
      leftScore: 0,
      rightScore: 0,
      leftQuote: "",
      rightQuote: "",
      quotesGenerated: false,
    })
  }
  
  render() {
    return (
      <>
      <img className="logo" src="./images/logo.png" alt="logo"/>
      <div className="flexContainer">
          <div className="leftColumn">
            <div className="leftInput">
              <select name="leftCharacter" onChange={this.handleLeftChange}>
                <option id value="chuck">Chuck Norris</option>
                <option value="ron">Ron Swanson</option>
                <option value="kanye">Kanye West</option>
                <option value="donald">Donald Trump</option>
              </select>
              <h2>Score: {this.state.leftScore}</h2>
            </div>
            <div class="speech-bubble"onClick={this.handleLeftClick}>
              <p><strong>{this.state.leftQuote}</strong></p>
            </div>
            <div className="charImg">
              <img
                src={`./images/left${this.state.leftCharacter}.png`}
                alt="Left character image"
              />
            </div>
          </div>
          <div className="buttonDiv">
          <button onClick={() => this.componentDidMount()}>New Quotes</button>
          <button onClick={this.resetGame}>Reset Game</button>
          </div>

          <div className="rightColumn">
            <div className="rightInput">
              <select name="rightCharacter" onChange={this.handleRightChange}>
                <option value="chuck">Chuck Norris</option>
                <option value="ron">Ron Swanson</option>
                <option value="kanye">Kanye West</option>
                <option value="donald">Donald Trump</option>
              </select>
              <h2>Score: {this.state.rightScore}</h2>
            </div>
            <div class="speech-bubble" onClick={this.handleRightClick}>
              <p><strong>{this.state.rightQuote}</strong></p>
            </div>
            <div className="charImg">
              <img
                src={`./images/right${this.state.rightCharacter}.png`}
                alt="Right character image"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Game
