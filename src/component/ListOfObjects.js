import React from 'react'
import Person from './Person'

function ListOfObjects() {
    const person =[
      {
        id:1,
        name: 'ismail',
        age: 20
      },
      {
        id:2,
        name: 'mohit',
        age: 21
      },
      {
        id:3,
        name: 'shashank',
        age: 20
      },
    ]
    
    
    //applying styles to each element of an array using map 
    //key is a unique props used by react to render a list it is unaccessible from child component

    const ObjectList=person.map(object_data=><Person key={object_data.id}  data={object_data}/>)

    //index as a key in list 
    const name=['ismail','shashank','mohit']
    const nameList=name.map((name,index)=> <h2>{index} {name}</h2>)

  return (
    <div>
    {ObjectList}
    <br/>
    {nameList}  
    </div>
  )
}

export default ListOfObjects
