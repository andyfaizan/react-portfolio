import React, { Component, PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../styles/typing.scss'
import '../styles/parallax-effects.scss'
import '../styles/headroom.scss'
// import Footer from '../components/Footer';
import Header from '../components/Header'
import { personalInfoData } from '../data/personalInfo'
// import Statistics from '../components/Statistics';
// import { startTime } from '../index'

const VelocityComponent = require('velocity-react/velocity-component')
// require('velocity-animate')
// require('velocity-animate/velocity.ui')
const Headroom = require('headroom.js/dist/headroom')
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showSubComponent: true
    }
    // this.onScroll = this.onScroll.bind(this)
  }

  // componentDidMount() {
  //   const { actions } = this.props
  //   actions.updateBenchmark(new Date().getTime() - startTime)
  // }

  onScroll() {
    if (this.state.showSubComponent) {
      this.setState({ showSubComponent: false })
    }
  }


  render() {
    // const addScrollListener = (node) => {
    //   if (node) {
    //     node.addEventListener('scroll', this.onScroll)
    //   }
    // }

    const headerInit = (headerElement) => {
      if (headerElement) {
        console.log(headerElement)
        console.log(Headroom)
        const header = new Headroom(headerElement, {
          tolerance: 5,
          offset: 205,
          classes: {
            initial: 'animated',
            pinned: 'slideDown',
            unpinned: 'slideUp'
          }
        })
        header.init()
      }
    }

    const buttonInit = (buttonElement) => {
      if (buttonElement) {
        const bttHeadroom = new Headroom(buttonElement, {
          tolerance: 0,
          offset: 500,
          classes: {
            initial: 'slide',
            pinned: 'slide--reset',
            unpinned: 'slide--down'
          }
        })
        bttHeadroom.init()
      }
    }

    return (
      <div className="parallax">
        <div
          ref={headerInit}
          style={{
            headroom: {
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
            },
            'headroom--unfixed': {
              position: 'relative',
              transform: 'translateY(0)',
            },
            'headroom--scrolled': {
              transition: 'transform 200ms ease-in-out',
            },
            'headroom--unpinned': {
              position: 'fixed',
              transform: 'translateY(-100%)',
            },
            'headroom--pinned': {
              position: 'fixed',
              transform: 'translateY(0%)',
            }
          }}
        >
          <Header personalInfo={personalInfoData} />
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base" />
          <div className="parallax__layer parallax__layer--back">
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
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <VelocityComponent
              animation={'scroll'}
              duration={150}
              runOnMount
            >
              <div className="title">
                Some text
              </div>
            </VelocityComponent>
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
