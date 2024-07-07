import React from "react";
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import  './App.css'

function App() {


  return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div  className='row text-center '>
          <div className="col">
              <Balance/>

              <Operation/>
          </div>

      </div>
      </div>
  )

}

export default App
