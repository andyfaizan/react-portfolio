import React, { Component, PropTypes } from 'react'
import MyTimeline from './MyTimeline'
import VerticalTimeline from './VerticalTimeline'
import '../styles/main.scss'

const propTypes = {
  show: PropTypes.bool,
}

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      completed: 0,
    }
    this.onAnimationComplete = this.onAnimationComplete.bind(this)
  }

  onAnimationComplete() {
    console.log(this.state.completed)
    this.setState({ completed: this.state.completed + 1 })
    if (this.state.completed === 3) {
      this.setState({ completed: 0 })
    }
    console.log(this.state.completed)
  }

  render() {
    return (
      <div>
        <div className="titleText">
          <h1 style={{ 'font-size': '500%', 'font-weight': 'bolder' }}>
            About Me
          </h1>
        </div>
        <div style={{ height: '30vh' }} />
        {/* <MyTimeline show={this.props.show} /> */}
        <VerticalTimeline show={this.props.show} />
      </div>
    )
  }
}

About.propTypes = propTypes

export default About
