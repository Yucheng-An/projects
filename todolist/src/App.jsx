import './css/style.css'

const CreateNew = () =>{
    return(
        <div >
            <p>New to do list</p>
            <input />
        </div>
    )
}

function App() {
    const [newThing, setNewThing] = useState()
    
  return (
      <div>
          <h1>To Do List</h1>
          <CreateNew/>
      </div>
  )
}
export default App
