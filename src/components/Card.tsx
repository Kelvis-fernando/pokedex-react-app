import React from 'react'
import {
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Card,
  CardProps,
} from '@chakra-ui/react'

const PokemonCard = ({
  children,
  onClick,
  pokemon,
  ...rest
}: CardProps | any) => {
  console.log(pokemon, 'auqi')
  return (
    <Card w="250px" boxShadow="2xl" m="5" onClick={onClick} cursor="pointer">
      <CardHeader display="flex" justifyContent="space-around">
        <Text fontWeight="bold" fontSize="larger">
          {pokemon.name}
        </Text>
        <Text fontSize="larger">#COD</Text>
      </CardHeader>
      <CardBody display="flex" justifyContent="center">
        <Image
          src={pokemon.sprites.front_default}
          alt="Pokemon"
          boxSize="150"
        />
      </CardBody>
      <CardFooter justifyContent="space-around">
        {pokemon.types.map((t: any) => (
          <>
            <Text
              p="1"
              backgroundColor="green.400"
              color="white"
              fontWeight="bold"
              borderRadius="sm"
            >
              {t.type.name}
            </Text>
          </>
        ))}
      </CardFooter>
    </Card>
  )
}

export default PokemonCard
