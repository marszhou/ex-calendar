import React, { Component } from 'react'
import Calendar from '.'
import Popup from './Popup'

class CalendarInput extends Component {
  state = {
    showPopup: false,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.value !== prevProps.value) {
      this.setState({ showPopup: false })
    }
  }

  handleClick = () => {
    this.setState({
      showPopup: true,
    })
  }

  handleHide = () => {
    this.setState({
      showPopup: false,
    })
  }

  render() {
    return (
      <Popup
        show={this.state.showPopup}
        content={
          <Calendar value={this.props.value} onChange={this.props.onChange} />
        }
        onClickOutside={this.handleHide}
      >
        <input
          type="text"
          onClick={this.handleClick}
          value={this.props.value}
          readOnly
        />
      </Popup>
    )
  }
}

export default CalendarInput
