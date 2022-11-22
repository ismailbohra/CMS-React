import { Component } from 'react';
import './App.css';
import Greet from './component/greeting';
import Hello from './component/jsx';
import Welcome from './component/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
      </div>
    );
  }
}

export default App;
