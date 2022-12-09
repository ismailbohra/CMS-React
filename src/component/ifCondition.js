import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    if(this.state.isLoggedIn){
        return(
            <div>Welcome Ismail bohra</div>
        )
    }
    else{
        return(
            <div>Welcome user</div>
        )
    }
  }
}

export default UserGreeting
