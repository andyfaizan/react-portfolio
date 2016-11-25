import React, { PropTypes } from 'react';

const propTypes = {
  personalInfo: PropTypes.object,
};

function HeaderContents({ personalInfo }) {
  return (
    <div className="container">
      <div className="navbar-brand">
        <a> {personalInfo.name} </a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li>
          <a href={personalInfo.resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a href={personalInfo.email} className="nav-link">
            <i className="fa fa-envelope icon"></i>
          </a>
        </li>
        <li>
          <a href={personalInfo.github} className="nav-link" target="_blank">
            <i className="fa fa-github icon"></i>
          </a>
        </li>
        <li>
          <a href={personalInfo.linkedIn} className="nav-link" target="_blank">
            <i className="fa fa-linkedin-square icon"></i>
          </a>
        </li>
        <li>
          <a href={personalInfo.angelList} className="nav-link" target="_blank">
            <i className="fa fa-angellist icon"></i>
          </a>
        </li>
        </ul>
    </div>
  );
}

HeaderContents.propTypes = propTypes;

export default HeaderContents;
