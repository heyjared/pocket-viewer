import { PokemonReducer, PokemonActionType } from "./";

export const pokemonReducer: PokemonReducer = (state, action) => {
    switch (action.type) {
        case PokemonActionType.SetSelectedPokemon:
            return { ...state, selectedPokemon: action.selectedPokemon }
        case PokemonActionType.FetchPokemonSuccess:
            const pokemonName = action.pokemon.name
            const pokemonMap = { ...state.pokemonMap, [pokemonName]: action.pokemon }
            return { ...state, pokemonMap }
        default:
            return state;
    }
}
