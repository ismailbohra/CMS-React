import { Component } from 'react';
import './App.css';
import Form from './component/Form';
import FragmentDemo from './component/FragmentDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form/> */}
        <FragmentDemo/>
      </div>
    );
  }
}

export default App;
