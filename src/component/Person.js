import React from 'react'

function Person({data}) {
  return (
    <div>
      <h2>my name is {data.name} and I am {data.age} years old</h2>
    </div>
  )
}

export default Person
