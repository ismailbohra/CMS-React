import { Component } from 'react';
import './App.css';
import ConditionalOperator from './component/ConditionalOperator';
import ElementVariable from './component/ElementVariable';
import UserGreeting from './component/ifCondition';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting/>
        <ElementVariable/>
        <ConditionalOperator/>
      </div>
    );
  }
}

export default App;
