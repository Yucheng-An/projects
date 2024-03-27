import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('A new thing')
    const thing = []
    const handleAdd = () =>{
        console.log(thing[0])
    }
    const addThing = (event) =>{
        event.preventDefault()
        console.log('button clicked', event.target)
    }

    const CreateNew = () =>{
        return(

                <p>New to do list</p>
                <form onSubmit={addThing}>
                    <input value = {newThing}/>
                    <button type = "submit">Add</button>
                </form>
            
        )
    }
  return (
      <div>
          <h1>To Do List</h1>
          <CreateNew handleAdd = {handleAdd}/>
      </div>
  )
}
export default App
