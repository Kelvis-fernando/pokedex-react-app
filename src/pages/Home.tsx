import { Box, Heading, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import PokemonCard from '../components/Card'

const Home = () => {
  return (
    <Box>
      <Header />
      <Box p="10">
        <Heading>Pokédex</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
