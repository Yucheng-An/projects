import './css/style.css'




function App() {
    const CreateNew = () =>{
        return(
            <div >
                <p>New to do list</p>
                <p>
                    <input></input>
                </p>
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
