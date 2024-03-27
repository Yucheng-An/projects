import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('A new thing...')
    const thing = ['Eat food','Go to bed']
    const handleAddChange = (event) =>{
        console.log(event.target.value)
        setNewThing(event.target.value)
    }
    const addThing = (event) =>{
        event.preventDefault()
        console.log('button clicked', event.target)
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
                
            </ul>
        </div>
    )
}

export default App
