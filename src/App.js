import { Children, Component } from 'react';
import './App.css';
// import {Hello, helloJSX } from './component/jsx';
// import {GreetWithName,ChildrenProps} from './component/props';
import Title from './component/state';
// import Welcome from './component/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GreetWithName name="ismail bohra" sem="3" />
        <GreetWithName name="Mohit Gupta" sem="5"/>
        <GreetWithName name="Shashank Shekhar" sem="3"/>
        <ChildrenProps name="xyz" sem="1">
          <p>This is children section</p>
        </ChildrenProps>
        <ChildrenProps name="xyz" sem="1">
          <button>Action </button>
        </ChildrenProps>
        <Welcome name="Ismail Bohra"/> */}
        <Title/>
      </div>
    );
  }
}

export default App;
