import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
const heading ={
font-size:"50px",
  color:"red"
}
  return (
    <div id="main">
      <h1 className="success" >Success</h1>
      <h1 style={heading} id='error' >Error</h1>
    </div>
  )
}


export default App;
