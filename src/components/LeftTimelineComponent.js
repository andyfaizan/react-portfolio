import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const VelocityComponent = require('velocity-react/velocity-component')
const Image = require('../resources/code.jpg')

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
          <img src={Image} height={'100%'} role="presentation" />
        </Paper>
      </VelocityComponent>
    </div>
  )
}

LeftTimelineComponent.propTypes = propTypes

export default LeftTimelineComponent
