import React, { useReducer } from "react";
import { PokemonContext, pokemonReducer } from ".";

export const PokemonProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(pokemonReducer, {
        pokemonMap: {},
        selectedPokemon: ''
    })
    const pokemonContext = { state, dispatch }
    return (
        <PokemonContext.Provider value={pokemonContext}>
            {children}
        </PokemonContext.Provider>
    )
}
