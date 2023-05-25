import { Box, Heading, Flex, useDisclosure, Button } from '@chakra-ui/react'
import Header from '../components/Header'
import PokemonCard from '../components/Card'
import PokemonInfo from './PokemonInfo'
import { useEffect, useState } from 'react'
import { getPokemonsWithDetails } from '../services/pokemonService'
import { PokemonResponseType } from '../types/PokemonResponse.types'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pokemons, setPokemonsResponse] = useState<PokemonResponseType[]>()

  const getPokemonData = async () => {
    const response = await getPokemonsWithDetails()
    setPokemonsResponse(response)
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  return (
    <Box>
      <Header />
      <Box p="10">
        <Heading>Pokédex</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {pokemons &&
            pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                onClick={onOpen}
                pokemon={pokemon}
              />
            ))}
        </Flex>
      </Box>
      <PokemonInfo isOpen={isOpen} onClose={onClose} children={undefined} />
    </Box>
  )
}

export default Home
