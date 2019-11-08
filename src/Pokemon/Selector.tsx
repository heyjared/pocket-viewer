import React, { useState, ChangeEventHandler, FormEventHandler, useContext, Dispatch } from 'react'
import { PokemonName } from './'
import { PokemonContext } from './context'
import { PokemonState, PokemonAction, PokemonActionType } from './types'
import { fetchPokemon } from './api'

export const PokemonSelector: React.FC = () => {
    const [pokemonName, setPokemon] = useState<PokemonName>('')
    const { dispatch } = useContext(PokemonContext)
    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
        setPokemon(event.target.value)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
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
