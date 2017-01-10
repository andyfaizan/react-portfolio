import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props
    return (
      <footer>
        <span id="footer-text-wrap">
        Built by {personalInfo.name}.
        Background picture by <a href="https://unsplash.com/@berry807">Berry van der Velden</a>
        </span>
      </footer>
    )
  }
}
