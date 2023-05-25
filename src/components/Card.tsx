import React from 'react'
import {
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Card,
  CardProps,
  Box,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import PokemonInfo from '../pages/PokemonInfo'

const PokemonCard = ({
  children,
  onClick,
  pokemon,
  ...rest
}: CardProps | any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Card
        w={isMobile ? '100%' : '200px'}
        boxShadow="2xl"
        m="5"
        onClick={onClick}
        cursor="pointer"
      >
        <Box onClick={onOpen}>
          <CardHeader display="flex" justifyContent="space-around">
            <Text fontWeight="bold" fontSize="larger">
              {pokemon.name.toUpperCase()}
            </Text>
            <Text fontSize="larger">#{pokemon.id}</Text>
          </CardHeader>
          <CardBody display="flex" justifyContent="center">
            <Image
              src={pokemon.sprites.front_default}
              alt="Pokemon"
              boxSize={isMobile ? '100%' : ''}
            />
          </CardBody>
          <CardFooter justifyContent="space-around">
            <Box textAlign="center">
              <Text fontWeight="bold">Height</Text>
              <Text>{pokemon.height}m</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="bold">Weight</Text>
              <Text>{pokemon.weight}</Text>
            </Box>
          </CardFooter>
        </Box>
      </Card>
      <PokemonInfo isOpen={isOpen} onClose={onClose} pokemonInfo={pokemon} />
    </>
  )
}

export default PokemonCard
