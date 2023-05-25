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
import useHeader from '../hooks/useHeader'
import { HeaderProps } from '../types/Header.types'

const Header = ({ setSearchResult }: HeaderProps) => {
  const { setSearchInput, isMobile, fetchData } = useHeader({ setSearchResult })

  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent={isMobile ? 'center' : 'space-around'}
    >
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
            w="100%"
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
      <Flex display={isMobile ? 'none' : 'flex'} alignItems="center">
        <Image
          src={banner1}
          alt="Pokemon Banner"
          height="40%"
          width="60%"
          minW="30%"
        />
        <Image
          src={banner2}
          marginTop={10}
          alt="Pokemon Banner"
          height="40%"
          width="60%"
          minW="30%"
        />
        <Image
          src={banner3}
          alt="Pokemon Banner"
          height="40%"
          width="60%"
          minW="30%"
        />
      </Flex>
    </Flex>
  )
}

export default Header
