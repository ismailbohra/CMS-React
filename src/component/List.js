import React from 'react'

function List() {
    const names =['ismail','shashank','mohit']
    //applying styles to each element of an array using map 
    const nameList=names.map(name=><h2>{name}</h2>)
  return (
    <div>
    {
        nameList
    }  
    </div>
  )
}

export default List
