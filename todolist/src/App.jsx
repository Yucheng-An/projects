import './css/style.css'
import {useState, useEffect} from 'react'
import Thing from "./components/Thing.jsx";

function App() {
    const [newThing, setNewThing] = useState('A new thing...')
    const things = ['Eat food','Go to bed']
    const handleAddChange = (event) =>{
        console.log(event.target.value)
        setNewThing(event.target.value)
    }
    const addThing = (event) =>{
        event.preventDefault()
        const newThingObject = 
    }

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={addThing}>
                <p>New to do list</p>
                <input value={newThing} onChange={handleAddChange}/>
                <button type="submit">Add</button>
            </form>
            <ul>
                {things.map(thing=>
                    <Thing key={thing.id} content={thing}/>
                )}
            </ul>
        </div>
    )
}

export default App
