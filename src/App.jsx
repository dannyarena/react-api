import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [persone, setPersone] = useState([]);
const [attoreCercato, setAttoreCercato] = useState("");

useEffect (() => {
  fetch('https://lanciweb.github.io/demo/api/actors/')  // chiamata
  .then(response => response.json())  //traduzione in JSON
  .then(data => {
    console.log(data);  //stampa
    setPersone(data);  //salvataggio nello stato
    
    
  }); }, []
);
    
  
return (
  <>
    <input type="text"
    placeholder='Cerca attore'
    value={attoreCercato}
    onChange={(e) => setAttoreCercato(e.target.value)}
    />

   <div>
    <h1>Lista di attori</h1>
    
    {/* creiamo le card dinamiche con il .map */}
    <div className='card-container'>
      {/* filtro per nome */}
    {persone.filter(p=> p.name.toLowerCase().includes(attoreCercato.toLowerCase()))
    .map(p => (
      <div className='card' key={p.name}>
          <img src={p.image} alt={p.name} />
          <h2>{p.name}</h2>
          <p>{p.birth_year}</p>
          <p>{p.nationality}</p>
          <p>{p.bio}</p>
          <p>{p.awards}</p>
        </div>
    ))}
    </div>
   </div>
   </>
  );
}

export default App
