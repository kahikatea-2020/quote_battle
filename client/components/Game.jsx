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
    switch (this.state.leftCharacter) {
      case "chuck":
        getChuckRandomJoke().then((res) => {
          this.setState({
            leftQuote: res,
          })
        })
        break
      case "kanye":
        getKanyeQuote().then((res) => {
          this.setState({
            leftQuote: res,
          })
        })
        break
      case "donald":
        getTonaldRandomQuote().then((res) => {
          this.setState({
            leftQuote: res,
          })
        })
        break
      case "ron":
        getRonRandomQuote().then((res) => {
          this.setState({
            leftQuote: res,
          })
        })
        break
    }
    switch (this.state.rightCharacter) {
      case "chuck":
        getChuckRandomJoke().then((res) => {
          this.setState({
            rightQuote: res,
          })
        })
        break
      case "kanye":
        getKanyeQuote().then((res) => {
          this.setState({
            rightQuote: res,
          })
        })
        break
      case "donald":
        getTonaldRandomQuote().then((res) => {
          this.setState({
            rightQuote: res,
          })
        })
        break
      case "ron":
        getRonRandomQuote().then((res) => {
          this.setState({
            rightQuote: res,
          })
        })
        break
    }
    this.setState({
      quotesGenerated: true,
    })
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
        <div className="leftColumn">
          <div className="leftInput">
            <select name="leftCharacter" onChange={this.handleLeftChange}>
              <option value="chuck">Chuck Norris</option>
              <option value="ron">Ron Swanson</option>
              <option value="kanye">Kanye West</option>
              <option value="donald">Donald Trump</option>
            </select>
            <h1>Score: {this.state.leftScore}</h1>
          </div>
          <div className="speechBubble" onClick={this.handleLeftClick}>
            <img alt="speech bubble" />
            <p>{this.state.leftQuote}</p>
          </div>
          <img
            src={`left${this.state.leftCharacter}.png`}
            alt="Left character image"
          />
        </div>

        <button onClick={() => this.componentDidMount()}>Generate Quote</button>
        <button onClick={this.resetGame}>Reset Game</button>

        <div className="rightColumn">
          <div className="rightInput">
            <select name="rightCharacter" onChange={this.handleRightChange}>
              <option value="chuck">Chuck Norris</option>
              <option value="ron">Ron Swanson</option>
              <option value="kanye">Kanye West</option>
              <option value="donald">Donald Trump</option>
            </select>
            <h1>Score: {this.state.rightScore}</h1>
          </div>
          <div className="speechBubble" onClick={this.handleRightClick}>
            <img
              src={`right${this.state.rightCharacter}.png`}
              alt="right character image"
            />
            <p>{this.state.rightQuote}</p>
          </div>
          <img alt="Right character image" />
        </div>
      </>
    )
  }
}

export default Game
