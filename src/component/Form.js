import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:"",
         option:'student'
      }
    }
    email=(event)=>{
       this.setState({
        email:event.target.value
       }) 
    }
    password=(event)=>{
        this.setState({
         password:event.target.value
        }) 
     }
    select=(event)=>{
        this.setState({
            option:event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        alert(`${this.state.email} ${this.state.password} ${this.state.option}`)
        event.preventDefault()
    }


  render() {
    const {email,password,option}=this.state
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
            <label>Email</label>
            <input type="text" value={email} onChange={this.email}/>
            <label>password</label>
            <input type="text" value={password} onChange={this.password}/>
            <select value={option} onChange={this.select}>
                <option>student</option>
                <option>admin</option>
                <option>staff</option>
            </select>
            <button type='submit'>Login</button>
            </div>
        </form>
    )
  }
}

export default Form
