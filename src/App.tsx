import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Home from './pages/Home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Home />
  </ChakraProvider>
)
