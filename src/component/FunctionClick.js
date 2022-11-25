import React from "react";

function FunctionClick(){
    function clickHandler(){
        console.log('button pressed')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick