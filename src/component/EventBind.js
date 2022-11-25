import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
      this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState({
            message: 'Goodbye!'
         })
    } 
    changeMsg=()=>{
        this.setState({
            message: 'Goodbye!'
         })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>
        <button onClick={this.changeMsg}>Click declaring clickhandler as arrow function</button>
      </div>
    )
  }
}

export default EventBind
