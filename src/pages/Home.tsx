import { Box, Heading, Flex, useDisclosure, Button } from '@chakra-ui/react'
import Header from '../components/Header'
import PokemonCard from '../components/Card'
import PokemonInfo from './PokemonInfo'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Header />
      <Box p="10">
        <Heading>Pokédex</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          <PokemonCard onClick={onOpen} />
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
      <PokemonInfo isOpen={isOpen} onClose={onClose} children={undefined} />
    </Box>
  )
}

export default Home
