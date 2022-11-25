import React, { Component } from 'react'
import Childcomponent from './childcomponent'
export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(data){
        alert(`Hello ${this.state.parentName} from ${data}`)
    }

  render() {
    return (
      <div>
        <Childcomponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
