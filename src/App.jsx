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
    
    {/* creiamo le card dinamiche con il .map */}
    {persone.map(p => (
      <div className='card'>
        <img src={p.image} alt={p.name} />
        <h2>{p.name}</h2>
        <p>{p.birth_year}</p>
        <p>{p.nationality}</p>
        <p>{p.bio}</p>
        <p>{p.awards}</p>
      </div>
    ))}
   </div>
  )
}

export default App
