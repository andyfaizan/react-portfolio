import React, { PropTypes } from 'react';

const propTypes = {
  personalInfo: PropTypes.object,
};

function HeaderContents({ personalInfo }) {
  return (
    <div className="container">
      <div className="navbar-brand">
        <h4> {personalInfo.name} </h4>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li>
          <a
            href={personalInfo.resume}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ lineHeight: 'normal' }}
          >
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a
            href={personalInfo.email}
            className="nav-link"
          >
            <i className="fa fa-envelope icon" />
          </a>
        </li>
        <li>
          <a
            href={personalInfo.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github icon" />
          </a>
        </li>
        <li>
          <a
            href={personalInfo.linkedIn}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square icon" />
          </a>
        </li>
        <li>
          <a
            href={personalInfo.angelList}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-angellist icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

HeaderContents.propTypes = propTypes;

export default HeaderContents;
