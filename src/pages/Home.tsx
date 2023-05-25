import { Box, Heading, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import PokemonCard from '../components/Card'
import useHome from '../hooks/useHome'

const Home = () => {
  const { sortedPokemons, serachResult, setSearchResult } = useHome()

  return (
    <Box>
      <Header setSearchResult={setSearchResult} />
      <Box p="10">
        <Heading>Pokédex</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {serachResult !== undefined ? (
            <PokemonCard key={serachResult} pokemon={serachResult} />
          ) : (
            sortedPokemons &&
            sortedPokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
