import React, { useContext } from 'react';
import { PokemonContext } from './'

export const PokemonView: React.FC = () => {
  const { state } = useContext(PokemonContext)
  const { pokemonMap, selectedPokemon } = state
  const pokemon = pokemonMap[selectedPokemon]
  if (!pokemon) { return null }
  return (
    <>
      <img src={pokemon.sprites.front_default} alt="front default sprite" />
      <span>{pokemon.name}</span>
    </>
  )
}
