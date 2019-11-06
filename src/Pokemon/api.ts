export const fetchPokemon = async (pokemonName: string) => {
    const url = new URL(`api/v2/pokemon/${pokemonName}`, "https://pokeapi.co")
    const result = await fetch(url.href)
        .then(res => res.json())
    return result
}
