import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import PokemonCards from './components/PokemonCards';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChoosen, setPokemonChoosen] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (response.status === 200) {
          setPokemon(response);
          setPokemonChoosen(true)
        };
      })
      .catch((error) => {
        setPokemon(error.message)
      })
  };
  return (
    <main className='px-2 bg-red-100 h-screen'>
      <div>
        <div>
          <h1 className='text-center py-5 text-2xl lg:text-3xl font-semibold font-mono'>Youth India Pokemon API</h1>
          <div className='grid grid-cols-12 lg:w-2/4 mx-auto'>
            <input type="text" placeholder="Type here" className="input input-bordered border-cyan-700 rounded-r-none col-span-7  lg:col-span-8" onChange={(e) => setPokemonName(e.target.value)} />
            {
              pokemonName === "" ? <button onClick={searchPokemon} className="btn bg-cyan-700 col-span-4 border-cyan-700 rounded-l-none text-white" disabled>Responsive</button> : <button onClick={searchPokemon} className="btn bg-cyan-700 col-span-5 lg:col-span-4 border-cyan-700 rounded-l-none text-white text-xs lg:text-sm">Search Pokemon</button>
            }
          </div>
        </div>
        <div className='lg:w-full mx-auto'>
          {
            pokemon && <PokemonCards pokemon={pokemon.data} pokemonChoosen={pokemonChoosen} />
          }
        </div>
      </div>
    </main>
  );
}

export default App;
