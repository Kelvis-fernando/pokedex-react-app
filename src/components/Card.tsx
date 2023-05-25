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
} from '@chakra-ui/react'

const PokemonCard = ({
  children,
  onClick,
  pokemon,
  ...rest
}: CardProps | any) => {
  console.log(pokemon, 'auqi')
  return (
    <Card w="200px" boxShadow="2xl" m="5" onClick={onClick} cursor="pointer">
      <CardHeader display="flex" justifyContent="space-around">
        <Text fontWeight="bold" fontSize="larger">
          {pokemon.name.toUpperCase()}
        </Text>
        <Text fontSize="larger">#{pokemon.id}</Text>
      </CardHeader>
      <CardBody display="flex" justifyContent="center">
        <Image src={pokemon.sprites.front_default} alt="Pokemon" />
      </CardBody>
      <CardFooter justifyContent="space-around">
        <Box textAlign="center">
          <Text fontWeight="bold">Height</Text>
          <Text>{pokemon.height}m</Text>
        </Box>
        <Box textAlign="center">
          <Text fontWeight="bold">Weight</Text>
          <Text>{pokemon.weight}kg</Text>
        </Box>
      </CardFooter>
    </Card>
  )
}

export default PokemonCard
