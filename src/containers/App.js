import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/typing.scss';
import '../styles/parallax-effects.scss';
import * as BenchmarkActions from '../actions/BenchmarkActions';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import Statistics from '../components/Statistics';
import { startTime } from '../index';

const VelocityComponent = require('velocity-react/velocity-component');
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSubComponent: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  onScroll() {
    if (this.state.showSubComponent) {
      this.setState({ showSubComponent: false });
    }
  }

  render() {
    const addScrollListener = (node) => {
      if (node) {
        node.addEventListener('scroll', this.onScroll);
      }
    };

    return (
      // <div className="main-app-container">
      //   <Header personalInfo={personalInfo} />
      //   <br />
      //   <Footer personalInfo={personalInfo} />
      //   <Statistics benchmark={benchmark} />
      // </div>
      <div ref={addScrollListener} className="parallax">
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base" />
          <div className="parallax__layer parallax__layer--back">
            <VelocityComponent
              animation={{ opacity: this.state.showSubComponent ? 1 : 0 }}
              duration={500}
            >
              <strong>
                <h1 className="typed">
                  Ainuddin Faizan
                  <span className="typed-span">&nbsp;</span>
                </h1>
              </strong>
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
    );
  }
}

App.propTypes = {
  // projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  // benchmark: PropTypes.number.isRequired,
  // personalInfo: PropTypes.object.isRequired,
  // showSubComponent: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo,
    showSubComponent: 'true',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
