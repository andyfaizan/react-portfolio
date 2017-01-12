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
  right: '100%',
  opacity: 0
}

function RightTimelineComponent({ show }) {
  return (
    <div>
      <VelocityComponent
        animation={{ translateX: show ? '-10vw' : 0, opacity: show ? 1 : 0 }}
        duration={1000}
        delay={200}
      >
        <Paper className="pull-right" style={style} zDepth={1} />
      </VelocityComponent>
    </div>
  )
}

RightTimelineComponent.propTypes = propTypes

export default RightTimelineComponent
