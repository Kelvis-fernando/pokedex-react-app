export interface PokemonResponseType {
  id: number
  types: object[]
  name: string
  sprites: object
  weight: number
  height: number
}

export interface PokemonProps {
  name: string
  url: string
}
