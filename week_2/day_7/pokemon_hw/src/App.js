import './App.css';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonTable from './components/PokemonTable';
import { Pokemon } from './models/pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);


  async function fetchPosts() {
    for (let i = 1; i < 21; i++){
      const url = 'https://pokeapi.co/api/v2/pokemon/' + i;
      console.log(url);
      getPokemon(url);
    }
  }

  async function getPokemon(url2) {
    //fetch API 
    const res = await fetch(url2, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);

    let pokemonData = new Pokemon(data.id, data.name, data.height, data.weight);

    console.log(pokemonData);

    setPokemons(pokemons => [...pokemons, pokemonData]);
  }


  return (
    <div className="text-center mt-5 mx-5">
      <button className="btn btn-primary" onClick={fetchPosts}> Fetch Pokemon</button>
      <PokemonTable pokemons={pokemons}></PokemonTable>
    </div>
  );
}

export default App;
