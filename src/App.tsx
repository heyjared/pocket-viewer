import React, { useReducer } from 'react';
import './App.css';
import { PokemonContext, PokemonView, PokemonSelector, pokemonReducer } from './Pokemon';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemonMap: {},
    selectedPokemon: ''
  })
  const pokemonContext = { state, dispatch }
  return (
    <div className="App">
      <header className="App-header">
        <PokemonContext.Provider value={pokemonContext}>
          <PokemonSelector />
          <PokemonView />
        </PokemonContext.Provider>
      </header>
    </div>
  );
}

export default App;
