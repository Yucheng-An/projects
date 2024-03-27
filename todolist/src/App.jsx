import './css/style.css'




function App() {
    const CreateNew = () =>{
        return(
            <div>
                <p>New to do list</p>


            </div>
        )
    }
  return (
      <div className="Center">
          <h1>To Do List</h1>
          <CreateNew/>
      </div>
  )
}
export default App
