import { ReactNode } from 'react'
import { PokemonResponseType } from './PokemonResponse.types'

export interface PokemonCardProps {
  children?: ReactNode
  onClick?: () => void
  pokemon?: PokemonResponseType
}
