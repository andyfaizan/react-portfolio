import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderContents from './HeaderContents'

const propTypes = {
  personalInfo: PropTypes.object,
}

export default function Header({ personalInfo }) {
  return (
    <div>
      <AppBar
        title={<HeaderContents personalInfo={personalInfo} />}
        iconElementLeft={<div />}
        style={{
          background: 'transparent',
          'box-shadow': 'none',
          color: 'white',
        }}
      />
    </div>
  )
}

Header.propTypes = propTypes
