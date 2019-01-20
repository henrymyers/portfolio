import React, { Component } from 'react';
import logo from './assets/logo.png';
import ghLogo from './assets/github.png';
import liLogo from './assets/linkedin.png';

class Landing extends Component {
  render() {
    return (
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <a className="link" href="https://github.com/henrymyers">
          <img src={ghLogo}></img>
          <span>henrymyers</span>
        </a>
        <a className="link" href="https://www.linkedin.com/in/mrhenrymyers">
          <img src={liLogo}></img>
          <span>mrhenrymyers</span>
        </a>
      </div>
    );
  }
}

export default Landing;
