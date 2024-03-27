import './css/style.css'
import {useState, useEffect} from 'react'
import Thing from "./components/Thing.jsx";


function App() {
    const [newThing, setNewThing] = useState('A new thing...')
    const things = ['Eat food','Go to bed']

    useEffect()

    const addThing = (event) =>{
        event.preventDefault()
        console.log(typeof newThing)
        console.log(things.length)
        things.push(newThing)
        console.log(things.length)
        setNewThing('')
    }

    const handleAddChange = (event) =>{
        setNewThing(event.target.value)
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
                {things.map((thing,index)=>
                    <li key = i>
                        {thing}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App
