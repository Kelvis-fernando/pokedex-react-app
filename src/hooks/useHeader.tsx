import { useBreakpointValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { searchPokemons } from '../services/pokemonService'
import { HeaderProps } from '../types/Header.types'

const useHeader = ({ setSearchResult }: HeaderProps) => {
  const [searchInput, setSearchInput] = useState('')
  const isMobile = useBreakpointValue({ base: true, md: false })
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

  return { setSearchInput, isMobile, fetchData }
}

export default useHeader
