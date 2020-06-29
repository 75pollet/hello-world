import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}, a {person.age} year old {person.gender}</h1>
        </div>
    )
}

export default Person
