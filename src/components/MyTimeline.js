import React from 'react'
import '../styles/main.scss'
import LeftTimelineComponent from './LeftTimelineComponent'
import RightTimelineComponent from './RightTimelineComponent'


const MyTimeline = ({ show }) => (
  <div>
    <div className="row" style={{ 'margin-bottom': '5vh' }}>
      <div className="col-md-6">
        <LeftTimelineComponent show={show} />
      </div>
      <div
        className="pull-right col-md-6"
        style={{
          height: '30vh',
          width: '35vw',
          margin: 20,
          textAlign: 'justify',
          right: '10vw',
        }}
      >
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h4>
      </div>
    </div>
    <div className="row" style={{ 'margin-bottom': '5vh' }}>
      <div className="col-md-6">
        <div
          style={{
            height: '30vh',
            width: '35vw',
            margin: 20,
            textAlign: 'justify',
            marginLeft: '100',
          }}
        >
          <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </div>
      <div className="col-md-6">
        <RightTimelineComponent show={show} />
      </div>
    </div>
    <div className="row" style={{ 'margin-bottom': '5vh' }}>
      <LeftTimelineComponent show={show} />
    </div>
    <div className="row" style={{ 'margin-bottom': '5vh' }}>
      <RightTimelineComponent show={show} />
    </div>
  </div>
    )

export default MyTimeline
