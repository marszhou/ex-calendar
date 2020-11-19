import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const popupContainer = document.getElementById('popups')

function isInsideElement(el, compareTo, considerEqual = false) {
  if (considerEqual) {
    if (el === compareTo) return true
  }
  if (el.parentNode) {
    if (el.parentNode === compareTo) {
      return true
    }
    return isInsideElement(el.parentNode, compareTo)
  }
  return false
}

class Popup extends Component {
  constructor(props) {
    super(props)
    this.popupContainer = document.createElement('div')
    this.popupContainer.style.position = 'absolute'
  }

  handleGlobalClick = (e) => {
    if (
      !(
        isInsideElement(e.target, this.popupContainer, true) ||
        isInsideElement(e.target, this.childElement, true)
      )
    ) {
      this.props.onClickOutside()
    }
  }

  componentDidMount() {
    popupContainer.appendChild(this.popupContainer)
    window.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnmount() {
    popupContainer.removeChild(this.popupContainer)
    window.removeEventListener('click', this.handleGlobalClick)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const rect = this.childElement.getBoundingClientRect()
    this.popupContainer.style.left = `${rect.x}px`
    this.popupContainer.style.top = `${rect.y + rect.height}px`
  }

  render() {
    const childElement = React.Children.only(this.props.children)

    return (
      <>
        {React.cloneElement(childElement, {
          ref: (el) => (this.childElement = el),
        })}
        {this.props.show
          ? ReactDOM.createPortal(this.props.content, this.popupContainer)
          : null}
      </>
    )
  }
}

export default Popup
