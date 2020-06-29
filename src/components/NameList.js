import React from 'react';
import Person from './Person';

function NameList() {    
    const persons = [{ id: 1, name: 'Jane', age: 14, gender: 'female' }, {id: 2, name: 'John', age: 8, gender: 'male' }]
    
    return (
        <div>
            {persons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default NameList
