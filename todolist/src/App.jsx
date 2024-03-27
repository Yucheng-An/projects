import './css/style.css'




function App() {
    const CreateNew = () =>{
        return(
            <div>
                New to do list
                <input>
                    <button/>
                </input>
            </div>
        )
    }
  return (
      <div className="Center">
          <h1>To Do List</h1>
          <form>
              <CreateNew />
          </form>
      </div>
  )
}
export default App
