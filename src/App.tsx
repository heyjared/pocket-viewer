import React from 'react';
import './App.css';
import { PokemonView, PokemonSelector, PokemonProvider } from './Pokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonProvider>
          <PokemonSelector />
          <PokemonView />
        </PokemonProvider>
      </header>
    </div>
  );
}

export default App;
