import { Component } from 'react';
import './App.css';
import Greet from './component/greeting';
import Welcome from './component/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet></Greet>
        <Welcome />            {/*self closing tag can be written in single name ending with forward slash*/}
      </div>
    );
  }
}

export default App;
