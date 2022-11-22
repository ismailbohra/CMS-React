import React, { Component } from "react";

class Title extends Component {

    constructor(){
        super()
        this.state={
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thankyou for Subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Login</button>
            </div>
        )
    }
}

export default  Title