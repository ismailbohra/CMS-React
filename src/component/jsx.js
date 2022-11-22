import React from "react";

const Hello=()=>{
    return(
        <div className="tutorial">
            <h1>Hello</h1>
        </div>
    )
}

//without jsx component 
const helloJSX=()=>{
    React.createElement(
        'div',
        {
            id:'HeadingElement',
            className: 'Title'
        },
        React.createElement(
            'h1',
            null,
            'Hello without JSX'
        )
    )
} 

export { 
    Hello,
    helloJSX
}

/*
jsx differences
Class  ClassName
for htmlFor

camelCase naming convention

*/