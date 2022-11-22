import { Component } from 'react';
import './App.css';
import {Hello, helloJSX } from './component/jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <helloJSX/>
      </div>
    );
  }
}

export default App;
