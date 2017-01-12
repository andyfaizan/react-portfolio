import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const VelocityComponent = require('velocity-react/velocity-component')

const propTypes = {
  show: PropTypes.bool,
}

const style = {
  height: '30vh',
  width: '35vw',
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block',
  // position: 'absolute',
  // float: 'left',
  left: '-100%',
  opacity: 0
}

function LeftTimelineComponent({ show }) {
  return (
    <div>
      <VelocityComponent
        animation={{ translateX: show ? '10vw' : 0, opacity: show ? 1 : 0 }}
        duration={1000}
        // complete={this.onAnimationComplete}
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
  )
}

LeftTimelineComponent.propTypes = propTypes

export default LeftTimelineComponent
