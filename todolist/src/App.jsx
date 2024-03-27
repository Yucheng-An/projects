import './css/style.css'




function App() {
    const [, set] = useState()

    const CreateNew = () =>{
        return(
            <div >
                <p>New to do list</p>
                <input />
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
