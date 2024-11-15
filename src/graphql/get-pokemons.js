import gql from "graphql-tag";

export const GET_POKEMONS = gql`
query (
  $offset: Int
  $take: Int
  $reverse: Boolean
  $offsetFlavorTexts: Int
  $takeFlavorTexts: Int
  $reverseFlavorTexts: Boolean
) {
  getAllPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    key
    backSprite
    baseForme
    baseSpecies
    sprite
    shinySprite
    baseStats {
      attack
      defense
      hp
      specialattack
      specialdefense
      speed
    }
    baseStatsTotal
    bulbapediaPage
    evolutionLevel
    evolutions {
      key
    }
    evYields {
      attack
      defense
      hp
      specialattack
      specialdefense
      speed
    }
    flavorTexts {
      flavor
      game
    }
    forme
    formeLetter
    otherFormes
    preevolutions {
      key
    }
    species
    types {
      name
    }
    weight
    mythical
    legendary
  }
}
`;