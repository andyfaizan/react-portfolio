import React, { PropTypes } from 'react'

const propTypes = {

}

function About() {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        top: '15%',
        WebkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        opacity: '0.87',
      }}
    >
      <h1 style={{ 'font-size': '500%', 'font-weight': 'bolder' }}>
        About Me
      </h1>
    </div>
  )
}

About.propTypes = propTypes

export default About
