import React from "react"

//props are used to reuse the component with different data

const GreetWithName=(data)=>{
    return( 
        <div>
            <h1>Welcome to CMS {data.name} sem {data.sem}</h1>
        </div>
    )
}
//data is not a keyword we can rename it as per use


const ChildrenProps=(data)=>{
    return( 
        <div>
            <h1>Welcome to CMS {data.name} sem {data.sem}</h1>
            {data.children}
        </div>
    )
}




export { 
    GreetWithName,
    ChildrenProps
}