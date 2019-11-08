import { PokemonName, PokemonAction, PokemonActionType } from "./types";

export const selectPokemon = (pokemonName: PokemonName): PokemonAction => {
    return { type: PokemonActionType.SetSelectedPokemon, selectedPokemon: pokemonName }
}
