import React, { Component } from 'react'

class ConditionalOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    return(
      this.state.isLoggedIn ? (<div>Welcome you are logged in checked by condition operator</div>) : (<div>Welcome you are not logged in checked by condition operator</div>)
    )
  }
}

export default ConditionalOperator
