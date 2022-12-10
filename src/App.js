import { Component } from 'react';
import './App.css';
import List from './component/List';
import ListOfObjects from './component/ListOfObjects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List/>
        <ListOfObjects/>
      </div>
    );
  }
}

export default App;
