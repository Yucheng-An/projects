import './css/style.css'
import {useState, useEffect} from 'react'

function App() {
    const [newThing, setNewThing] = useState('A new thing')
    const thing = []
    const handleAdd = () =>{
        console.log(thing[0])
    }

    const CreateNew = () =>{
        return(
            <div >
                <p>New to do list</p>
                <form onSubmit={}>

                </form>
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
