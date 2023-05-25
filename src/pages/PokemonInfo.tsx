import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Progress,
  Image,
} from '@chakra-ui/react'
import { PokemonInfoProps, PokemonTypes } from '../types/PokemonResponse.types'

const PokemonInfo = ({ isOpen, onClose, pokemonInfo }: PokemonInfoProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={pokemonInfo.sprites.front_default} boxSize="300" />
          <Box width="100%">
            <Heading>{pokemonInfo.name.toUpperCase()}</Heading>
            <Flex justifyContent="space-between" alignItems="center">
              <Text>COD #{pokemonInfo.id}</Text>
              <Text display="flex">
                TYPE(S):
                {pokemonInfo.types.map((t: PokemonTypes, index: number) => (
                  <Text
                    key={index}
                    p="1"
                    ml="3"
                    borderRadius="sm"
                    bg="gray"
                    fontWeight="bold"
                  >
                    {t.type.name.toUpperCase()}
                  </Text>
                ))}
              </Text>
            </Flex>
            <Box mt="5">
              <Heading as="h3" size="lg">
                Informações
              </Heading>
              <Flex justifyContent="space-between">
                <Text>Altura</Text>
                <Text display="flex">{pokemonInfo.height}m</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Peso</Text>
                <Text display="flex">{pokemonInfo.weight}</Text>
              </Flex>
              <Box mt="5">
                <Text fontWeight="bold" mt="2">
                  HP {pokemonInfo.stats[0].base_stat}
                </Text>
                <Progress
                  colorScheme="green"
                  height="32px"
                  value={pokemonInfo.stats[0].base_stat}
                />
                <Text fontWeight="bold" mt="2">
                  Attack {pokemonInfo.stats[1].base_stat}
                </Text>
                <Progress
                  colorScheme="red"
                  height="32px"
                  value={pokemonInfo.stats[1].base_stat}
                />
                <Text fontWeight="bold" mt="2">
                  Defense {pokemonInfo.stats[2].base_stat}
                </Text>
                <Progress
                  colorScheme="blue"
                  height="32px"
                  value={pokemonInfo.stats[2].base_stat}
                />
                <Text fontWeight="bold" mt="2">
                  Special Attack {pokemonInfo.stats[3].base_stat}
                </Text>
                <Progress
                  colorScheme="purple"
                  height="32px"
                  value={pokemonInfo.stats[3].base_stat}
                />
                <Text fontWeight="bold" mt="2">
                  Special Defense {pokemonInfo.stats[4].base_stat}
                </Text>
                <Progress
                  colorScheme="pink"
                  height="32px"
                  value={pokemonInfo.stats[4].base_stat}
                />
                <Text fontWeight="bold" mt="2">
                  Speed {pokemonInfo.stats[5].base_stat}
                </Text>
                <Progress
                  colorScheme="yellow"
                  height="32px"
                  value={pokemonInfo.stats[5].base_stat}
                />
              </Box>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="salmon"
            color="white"
            size="md"
            boxShadow="lg"
            _hover={{ backgroundColor: 'lightcoral' }}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PokemonInfo
