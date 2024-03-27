import './css/style.css'




function App() {
    const createNew = () =>{
        return(
            <div>
                <input></input>
            </div>
        )
    }
  return (
    <div className = "Center" >
        <h1>To Do List</h1>
        <createNew />
    </div>
  )
}
export default App
