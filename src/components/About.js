import React, { Component, PropTypes } from 'react'
import '../styles/main.scss'
import LeftTimelineComponent from './LeftTimelineComponent'
import RightTimelineComponent from './RightTimelineComponent'

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
        <div>
          <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <LeftTimelineComponent show={this.props.show} />
          </div>
          <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <RightTimelineComponent show={this.props.show} />
          </div>
          <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <LeftTimelineComponent show={this.props.show} />
          </div>
          <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <RightTimelineComponent show={this.props.show} />
          </div>
          {/* <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <div className="col-md-1" />
            <div className={this.state.completed === 2 ? 'col-md-5' : 'abs-position'}>
              <VelocityComponent
                animation={{ translateX: this.props.show ? '20vh' : 0 }}
                duration={1000}
                complete={this.onAnimationComplete}
              >
                <Paper style={style} zDepth={1}>
                  <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
                </Paper>
              </VelocityComponent>
            </div>
            <div className="col-md-6" />
          </div>
          <div className="row" style={{ 'margin-bottom': '5vh' }}>
            <div className="col-md-6" />
            <div className="col-md-5">
              <VelocityComponent
                animation={{ opacity: this.props.show ? 1 : 0 }}
                delay={500}
                duration={1000}
              >
                <Paper className="pull-right" style={style} zDepth={1} />
              </VelocityComponent>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row" style={{ 'margin-bottom': '10vh' }}>
            <div className="col-md-1" />
            <div className="col-md-5">
              <VelocityComponent
                animation={'fadeIn'}
                duration={1000}
              >
                <Paper style={style} zDepth={1} />
              </VelocityComponent>
            </div>
            <div className="col-md-6" />
          </div> */}
        </div>
      </div>
    )
  }
}

About.propTypes = propTypes

export default About
