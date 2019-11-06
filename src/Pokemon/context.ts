import React, { Dispatch } from "react";
import { PokemonAction, PokemonState } from './'

const state: PokemonState = {
    pokemonMap: {},
    selectedPokemon: ''
}
const dispatch: Dispatch<PokemonAction> = (value) => { }

export const defaultPokemonContext = {
    state,
    dispatch
}

export const PokemonContext = React.createContext(defaultPokemonContext);
