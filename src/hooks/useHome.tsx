import { useState, useEffect } from 'react'
import { getPokemonsWithDetails } from '../services/pokemonService'
import { PokemonResponseType } from '../types/PokemonResponse.types'

const useHome = () => {
  const [pokemons, setPokemonsResponse] = useState<PokemonResponseType[]>()
  const [serachResult, setSearchResult] = useState()
  let [cardsToShow, setCardsToShow] = useState(20)

  const getPokemonData = async (limit: number) => {
    const response = await getPokemonsWithDetails(limit)
    setPokemonsResponse(response)
  }

  useEffect(() => {
    getPokemonData(cardsToShow)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollTop + clientHeight >= scrollHeight) {
        setCardsToShow((cardsToShow += 20))
        getPokemonData(cardsToShow)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sortedPokemons = pokemons?.sort((a, b) => a.id - b.id)
  return { sortedPokemons, serachResult, setSearchResult }
}

export default useHome
