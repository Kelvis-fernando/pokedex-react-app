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
import pokemon from '../assets/vulpix.svg'

const PokemonCard = ({ children, onClick, ...rest }: CardProps) => {
  return (
    <Card w="250px" boxShadow="2xl" m="5" onClick={onClick} cursor="pointer">
      <CardHeader display="flex" justifyContent="space-around">
        <Text fontWeight="bold" fontSize="larger">
          Vulpix
        </Text>
        <Text fontSize="larger">#COD</Text>
      </CardHeader>
      <CardBody display="flex" justifyContent="center">
        <Image src={pokemon} alt="Pokemon" boxSize="150" />
      </CardBody>
      <CardFooter justifyContent="space-around">
        <Text
          p="1"
          backgroundColor="green.400"
          color="white"
          fontWeight="bold"
          borderRadius="sm"
        >
          Grasp
        </Text>
        <Text
          p="1"
          backgroundColor="blue.400"
          color="white"
          fontWeight="bold"
          borderRadius="sm"
        >
          Water
        </Text>
      </CardFooter>
    </Card>
  )
}

export default PokemonCard
