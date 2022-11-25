import React,{Component} from "react";

class WelcomeDes extends Component{
    render(){
        const {name} =this.props
        return(
            <h1>Welcome from class {name}</h1>
        )
    }
}

export default WelcomeDes 