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
    <Card maxW="md" boxShadow="2xl" m="5" onClick={onClick}>
      <CardHeader display="flex" justifyContent="space-between">
        <Text fontWeight="bold">Vulpix</Text>
        <Text>#COD</Text>
      </CardHeader>
      <CardBody>
        <Image src={pokemon} alt="Pokemon" />
      </CardBody>
      <CardFooter justifyContent="space-between">
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
