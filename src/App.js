import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftConnector from './components/Leftnav/LeftConnector';
import WorkAreaConnector from './components/Workarea/WorkAreaConnector';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='App-area'>
          <LeftConnector  />
          <WorkAreaConnector />
        </div>
      </div>
    );
  }
}

export default connect()(App);
