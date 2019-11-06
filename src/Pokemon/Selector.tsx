import React, { useState, ChangeEventHandler, FormEventHandler, useContext } from 'react'
import { PokemonContext, fetchPokemon, PokemonName } from './'
import { PokemonActionType } from './types'

export const PokemonSelector: React.FC = () => {
    const [pokemonName, setPokemon] = useState<PokemonName>('')
    const { dispatch } = useContext(PokemonContext)
    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
        setPokemon(event.target.value)
    }

    const handleSubmit: FormEventHandler = event => {
        event.preventDefault()
        dispatch({ type: PokemonActionType.SetSelectedPokemon, selectedPokemon: pokemonName })
        fetchPokemon(pokemonName)
            .then(pokemon => dispatch({ type: PokemonActionType.FetchPokemonSuccess, pokemon }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={pokemonName} placeholder="pokemon name" onChange={handleChangeInput}></input>
            <input type="submit" />
        </form>
    )
}
