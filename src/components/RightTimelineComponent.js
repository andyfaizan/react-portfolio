import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const VelocityComponent = require('velocity-react/velocity-component')
const Image = require('../resources/code.jpg')

const propTypes = {
  show: PropTypes.bool,
}

const style = {
  height: '30vh',
  width: '30vw',
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block',
  // position: 'absolute',
  // float: 'left',
  right: '10vw',
  opacity: 0
}

function RightTimelineComponent({ show }) {
  return (
    <div>
      <VelocityComponent
        animation={{ translateX: show ? '-10vw' : 0, opacity: show ? 1 : 0 }}
        duration={500}
        delay={500}
      >
        <Paper className="pull-right" style={style} zDepth={1} >
          <img src={Image} height={'100%'} role="presentation" />
        </Paper>
      </VelocityComponent>
    </div>
  )
}

RightTimelineComponent.propTypes = propTypes

export default RightTimelineComponent
