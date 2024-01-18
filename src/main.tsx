import React from 'react'
import ReactDOM from 'react-dom'
import Firstpage from './Firstpage'
import { BrowserRouter , Router , Route } from 'react-router-dom'
import Secondpage from './Secondpage'
import './index.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Firstpage />} />
        <Route path="/second-page" element={<Secondpage />} />
      </Router>
    </BrowserRouter>
  </React.StrictMode>
);
