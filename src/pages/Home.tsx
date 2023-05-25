import { Box, Heading, Flex, useDisclosure, Button } from '@chakra-ui/react'
import Header from '../components/Header'
import PokemonCard from '../components/Card'
import useHome from '../hooks/useHome'

const Home = () => {
  const { sortedPokemons } = useHome()

  return (
    <Box>
      <Header />
      <Box p="10">
        <Heading>Pokédex</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {sortedPokemons &&
            sortedPokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
