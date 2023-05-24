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
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  Progress,
  Image,
} from '@chakra-ui/react'
import vulpix from '../assets/vulpix.svg'

const PokemonInfo = ({ isOpen, onClose }: ModalProps) => {
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
          <Image src={vulpix} boxSize="300" />
          <Box>
            <Heading>Vulpix</Heading>
            <Flex justifyContent="space-between">
              <Text>COD #0000</Text>
              <Text display="flex">
                Tipo:
                <Text
                  p="1"
                  ml="3"
                  borderRadius="sm"
                  bg="orange"
                  fontWeight="bold"
                >
                  Fogo
                </Text>
              </Text>
            </Flex>
            <Box mt="5">
              <Heading as="h3" size="lg">
                Descriçāo
              </Heading>
              <Text>
                "Charmeleon destrói seus oponentes sem pena com suas garras
                afiadas. Torna-se agressivo quando encontra um oponente forte e
                então a chama na ponta da sua cauda queima intensamente em uma
                cor azulada."
              </Text>
            </Box>
            <Box mt="5">
              <Heading as="h3" size="lg">
                Informações
              </Heading>
              <Flex justifyContent="space-between">
                <Text>Altura</Text>
                <Text display="flex">1.7</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Peso</Text>
                <Text display="flex">50kg</Text>
              </Flex>
              <Box mt="5">
                <Progress colorScheme="green" height="32px" value={70} />
                <Progress colorScheme="orange" height="32px" value={20} />
                <Progress colorScheme="blue" height="32px" value={30} />
                <Progress colorScheme="red" height="32px" value={50} />
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
