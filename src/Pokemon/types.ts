import { Reducer } from "react";

export type PokemonName = string
export type PokemonReducer = Reducer<PokemonState, PokemonAction>;
export type PokemonState = {
    pokemonMap: any
    selectedPokemon: PokemonName
}

export enum PokemonActionType {
    SetSelectedPokemon = "SET_SELECTED_POKEMON",
    FetchPokemonSuccess = "FETCH_POKEMON_SUCCESS"
}

export type PokemonAction =
    | { type: PokemonActionType.SetSelectedPokemon, selectedPokemon: PokemonName }
    | { type: PokemonActionType.FetchPokemonSuccess, pokemon: any }
