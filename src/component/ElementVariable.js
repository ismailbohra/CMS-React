import React, { Component } from 'react'

class ElementVariable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    let message
    if(this.state.isLoggedIn){
      message=<div>Welcome Ismail bohra</div>
    }
    else{
      message=<div>Welcome user</div>
    }

    return(
      <div>{message}</div>
    )
  }
}

export default ElementVariable
