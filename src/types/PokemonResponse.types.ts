export interface PokemonResponseType {
  id: number
  key: number
  types: object[]
  stats: object[]
  name: string
  sprites: { front_default: string }
  weight: number
  height: number
}

export interface PokemonProps {
  name: string
  url: string
}

export interface PokemonInfoProps {
  isOpen: boolean
  onClose: () => void
  pokemonInfo?: any
}

export interface PokemonTypes {
  type: { name: string }
}
