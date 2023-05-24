import axios from 'axios'
import { PokemonProps, PokemonResponseType } from '../types/PokemonResponse.types'


const getPokemons = async (limit = 20) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`
    )
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonsWithDetails = async () => {
  const response = await getPokemons()
  const pokemonDetails: PokemonResponseType[] = []

  await Promise.all(
    response.map(async (item: PokemonProps) => {
      const { data } = await axios.get(item.url)
      const pokemon: PokemonResponseType = {
        name: data.name,
        types: data.types,
        sprites: data.sprites,
      }
      pokemonDetails.push(pokemon)
    })
  )
  return pokemonDetails
}
