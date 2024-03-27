import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('')
    const thing = []
    const handleAdd = () =>{
        setNewThing()
        console.log(thing[0])
    }

    const CreateNew = (props) =>{
        return(
            <div >
                <p>New to do list</p>
                <input />
                <button onClick = {props.handleAdd}>Add</button>
            </div>
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
