import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import myTitle from "./components/myTitle.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <myTitle />
    <App />
  </React.StrictMode>
)
