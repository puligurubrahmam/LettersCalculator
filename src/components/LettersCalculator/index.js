import './index.css'
import {Component} from 'react'
class LettersCalculator extends Component {
  state = {count: 0}
  lengthCount = event => {
    this.setState({count: event.target.value.length})
  }
  render() {
    return (
      <div className="bg">
        <div className="card1">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="string">Enter the phrase</label>
          <input
          id="string"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.lengthCount}
          />
          <p className="button">No.of letters: {this.state.count}</p>
        </div>
        <div className="card2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
