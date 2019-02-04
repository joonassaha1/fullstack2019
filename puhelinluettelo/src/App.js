import React, { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const rows = () => persons.map(person =>
    <Person
      key={person.id}
      person={person}
    />
  )

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form on onSubmit={addPerson}>
        <div> 
          nimi: <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div> 
          numero: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {rows()}
    </div>
  )

}

export default App