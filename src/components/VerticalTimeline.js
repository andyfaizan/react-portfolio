import React, { PropTypes } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline/dist'
import Paper from 'material-ui/Paper'
import RightTimelineComponent from './RightTimelineComponent'

const VelocityComponent = require('velocity-react/velocity-component')
const Image = require('../resources/code.jpg')

const propTypes = {

}

const style = {
  height: '150',
  width: '150',
  marginLeft: '-65',
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden',
  marginTop: '-30%',
}

function VerticalTimeline({ show }) {
  return (
    <div style={{ 'margin-left': '50%' }}>
      <Timeline>
        <VelocityComponent
          animation={{ translateX: show ? '0vw' : 0, opacity: show ? 1 : 0 }}
          duration={500}
          delay={500}
        >
          <TimelineEvent
            title="University"
            icon={
              <Paper zDepth={1} style={style} circle>
                <img src={Image} width="100%" height="100%" role="presentation" />
              </Paper>
            }
            container="card"
            style={{ 'margin-left': '10%', 'margin-bottom': '20%' }}
          >
            I received the payment for $543.
            Should be shipping the item within a couple of hours.
        </TimelineEvent>
        </VelocityComponent>
        <TimelineEvent
          title="University"
          icon={
            <Paper zDepth={1} style={style} circle>
              <img src={Image} width="100%" height="100%" role="presentation" />
            </Paper>
          }
          container="card"
          style={{ 'margin-left': '-100%', 'margin-right': '120%', 'margin-bottom': '20%' }}
        >
          For my masters, I moved to Germany and took admission
          at RWTH Aachen.
        </TimelineEvent>
        <VelocityComponent
          animation={'fadeIn'}
          duration={500}
          delay={500}
        >
          <TimelineEvent
            title="University"
            icon={
              <Paper zDepth={1} style={style} circle>
                <img src={Image} width="100%" height="100%" role="presentation" />
              </Paper>
            }
            container="card"
            style={{ 'margin-left': '10%', 'margin-bottom': '20%' }}
          >
            I received the payment for $543.
            Should be shipping the item within a couple of hours.
        </TimelineEvent>
        </VelocityComponent>
      </Timeline>
    </div>
  )
}

VerticalTimeline.propTypes = propTypes

export default VerticalTimeline
