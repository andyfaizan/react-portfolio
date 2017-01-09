import React, { Component, PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../styles/typing.scss'
import '../styles/parallax-effects.scss'
import '../styles/headroom.scss'
// import Footer from '../components/Footer';
import Header from '../components/Header'
import MyTimeline from '../components/MyTimeline'
import { personalInfoData } from '../data/personalInfo'
// import Statistics from '../components/Statistics';
// import { startTime } from '../index'

const VelocityComponent = require('velocity-react/velocity-component')
// require('velocity-animate')
// require('velocity-animate/velocity.ui')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
      lastTime: -1,
    }
    this.onScroll = this.onScroll.bind(this)
  }

  // componentDidMount() {
  //   const { actions } = this.props
  //   actions.updateBenchmark(new Date().getTime() - startTime)
  // }

  onScroll() {
    if (this.state.lastTime !== -1 && new Date().getTime() - this.state.lastTime < 150) {
      return
    }
    this.setState({ lastTime: new Date().getTime() })
    const element = this.refs.ele
    const offsets = element.getBoundingClientRect()
    const yOffset = offsets.top
    if (yOffset >= 0) {
      this.setState({ hidden: true })
    }
    if (yOffset < 0) {
      this.setState({ hidden: false })
    }
  }

  render() {
    const addScrollListener = (node) => {
      if (node) {
        node.addEventListener('scroll', this.onScroll)
      }
    }

    return (
      <div style={{ width: '100%' }}>
        <VelocityComponent
          animation={{ opacity: this.state.hidden ? 0 : 1, zIndex: 1100 }}
          runOnMount
        >
          <div style={{ position: 'fixed', top: 0, left: '0px', right: '0px' }}>
            <Header personalInfo={personalInfoData} />
          </div>
        </VelocityComponent>
        <div className="parallax" ref={addScrollListener}>
          <div id="group2" className="parallax__group">
            <div className="parallax__layer parallax__layer--base" />
            <div className="parallax__layer parallax__layer--back">
              <VelocityComponent
                animation={{ opacity: [1, 0] }}
                duration={2000}
                delay={3000}
                runOnMount
              >
                <div className="withBackground" />
              </VelocityComponent>
              <VelocityComponent
                animation={{ translateY: '-10vh' }}
                delay={2000}
                duration={1000}
                runOnMount
              >
                <h1 className="typed">
                  Ainuddin Faizan
                  <span className="typed-span">&nbsp;</span>
                </h1>
              </VelocityComponent>
              <VelocityComponent
                animation={{ opacity: [1, 0] }}
                delay={3000}
                duration={2000}
                runOnMount
              >
                <h1 className="welcome">
                  Welcome
                </h1>
              </VelocityComponent>
            </div>
          </div>
          <div id="group3" className="parallax__group" ref="ele">
            <div className="parallax__layer parallax__layer--fore">
              <MyTimeline />
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
          </div>
          <div id="group4" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              <div className="title">
              Background Layer
            </div>
            </div>
          </div>
          <div id="group5" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title">
              Foreground Layer
            </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
          </div>
          <div id="group6" className="parallax__group">
            <div className="parallax__layer parallax__layer--back">
              <div className="title">
              Background Layer
            </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
          </div>
          <div id="group7" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
              Base Layer
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  // projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  // benchmark: PropTypes.number.isRequired,
  // personalInfo: PropTypes.object.isRequired,
  // showSubComponent: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo,
    showSubComponent: 'true',
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(BenchmarkActions, dispatch)
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App)
