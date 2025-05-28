import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [persone, setPersone] = useState([]);
const [nomeCercato, setNomeCercato] = useState("");

useEffect(() => {
  // prima gli attori
  fetch('https://lanciweb.github.io/demo/api/actors/')  // chiamata
    .then(response => response.json())  //traduzione in JSON
    .then(dataAttori => {
       // poi le attrici
      fetch('https://lanciweb.github.io/demo/api/actresses/')  // chiamata
        .then(response => response.json())  //traduzione in JSON
        .then(dataAttrici => {
        //  poi unisci
          const unione = [...dataAttori, ...dataAttrici];
          setPersone(unione);
        });
    }); }, []);
  
return (
  <>
    <input type="text"
    placeholder='Cerca attore'
    value={nomeCercato}
    onChange={(e) => setNomeCercato(e.target.value)}
    />

   <div>
    <h1>Lista di attori</h1>
    
    {/* creiamo le card dinamiche con il .map */}
    <div className='card-container'>
      {/* filtro per nome */}
    {persone.filter(p => p.name.toLowerCase().includes(nomeCercato.toLowerCase()))
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