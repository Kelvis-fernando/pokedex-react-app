import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import banner1 from '../assets/banner-1.svg'
import banner2 from '../assets/banner-2.svg'
import banner3 from '../assets/banner-3.svg'
import { useState, useEffect } from 'react'
import { searchPokemons } from '../services/pokemonService'

const Header = ({ setSearchResult }: any) => {
  const [searchInput, setSearchInput] = useState('')
  let typingTimeout: NodeJS.Timeout | null = null

  const fetchData = async () => {
    if (searchInput.toLowerCase().length >= 1) {
      setSearchResult(await searchPokemons(searchInput.toLowerCase()))
    }
  }

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    typingTimeout = setTimeout(() => {
      fetchData()
    }, 1000)

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout)
      }
    }
  }, [searchInput, setSearchResult])

  return (
    <Flex display="flex" alignItems="center" justifyContent="space-around">
      <Box>
        <Heading textAlign="center">
          Explore o mundo dos <Text color="salmon">Pokémons</Text>
        </Heading>
        <Text textAlign="center" marginTop={3}>
          Descubra todas as espécies de Pokémons
        </Text>
        <Flex marginTop={10}>
          <Input
            placeholder="Search for a pokemon..."
            boxShadow="lg"
            w="sm"
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button
            backgroundColor="salmon"
            color="white"
            size="md"
            boxShadow="lg"
            _hover={{ backgroundColor: 'lightcoral' }}
            onClick={fetchData}
          >
            Search
          </Button>
        </Flex>
      </Box>
      <Flex alignItems="center">
        <Image src={banner1} alt="Pokemon Banner" height={350} width={200} />
        <Image
          src={banner2}
          marginTop={10}
          alt="Pokemon Banner"
          height={350}
          width={200}
        />
        <Image src={banner3} alt="Pokemon Banner" height={350} width={200} />
      </Flex>
    </Flex>
  )
}

export default Header
