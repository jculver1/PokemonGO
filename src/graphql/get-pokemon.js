import gql from "graphql-tag";

export const GET_POKEMON = gql`
  query getPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
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