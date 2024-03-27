import './css/style.css'




function App() {
    const CreateNew = () =>{
        return(
            <div>
                <input></input>
            </div>
        )
    }
  return (
      <div className="Center">
          <h1>To Do List</h1>
          <CreateNew />
      </div>
    <CreateNew />
  )
}
export default App
