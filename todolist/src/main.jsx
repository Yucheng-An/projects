import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyComponent from "./components/helmet.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MyComponent/>
     <App />
  </React.StrictMode>,
)
