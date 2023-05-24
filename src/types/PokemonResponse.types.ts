export interface PokemonResponseType {
  types: object[]
  name: string
  sprites: object
}

export interface PokemonProps {
  name: string
  url: string
}
