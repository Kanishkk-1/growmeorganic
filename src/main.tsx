import React from 'react'
import ReactDOM from 'react-dom/client'
import Firstpage from './Firstpage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import Secondpage from './Secondpage'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Firstpage/>
    {/* <Secondpage/> */}
  </React.StrictMode>,
)
