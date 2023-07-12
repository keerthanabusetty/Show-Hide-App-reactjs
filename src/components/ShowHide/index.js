// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHideApp extends Component {
  state = {firstName: false, lastName: false}

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.onFirstName}
            >
              Show/Hide FirstName
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.onLastName}
            >
              Show/Hide LastName
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHideApp
