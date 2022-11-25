import { Children, Component } from 'react';
import './App.css';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
// import {Hello, helloJSX } from './component/jsx';
// import {GreetWithName,ChildrenProps} from './component/props';
// import Title from './component/state';
// import Count from './component/Counter2';
// import Message from './component/message';
// import Welcome from './component/welcome';
import FunctionClick from './component/FunctionClick';

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
        <Welcome name="Ismail Bohra"/>
        <Title/> 
        <Count/>
        <Message/>
        <Welcome name="Ismail Bohra"/>
        <FunctionClick/>
        <ClassClick/>*/}
        <EventBind/>
      </div>
    );
  }
}

export default App;
