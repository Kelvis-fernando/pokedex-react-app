export interface PokemonResponseType {
  id: number
  types: object[]
  stats: object[]
  name: string
  sprites: object
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
