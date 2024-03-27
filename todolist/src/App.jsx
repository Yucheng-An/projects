import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('')


    const CreateNew = () =>{
        
        return(
            <div >
                <p>New to do list</p>
                <input />
                <button>Add</button>
            </div>
        )
    }
  return (
      <div>
          <h1>To Do List</h1>
          <CreateNew/>
      </div>
  )
}
export default App
