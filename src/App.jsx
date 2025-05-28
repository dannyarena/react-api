import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [persone, setPersone] = useState([])

useEffect (() => {
  fetch('https://lanciweb.github.io/demo/api/actors/')  // chiamata
  .then(response => response.json())  //traduzione in JSON
  .then(data => {
    console.log(data);  //stampa
    setPersone(data);  //salvataggio nello stato
  });
}, []);

  return (
   <div>
    <h1>Lista di attori</h1>
   </div>
  )
}

export default App
