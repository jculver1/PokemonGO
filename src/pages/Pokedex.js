import React , { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import Pokemon from "../components/Pokemon";

const Pokedex = () => {

  // eslint-disable-next-line no-unused-vars
  const [offset, setOffset] = useState(89);
  const [limit] = useState(20); // Adjust the limit as needed

  const { data, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      "offset": offset,
      "limit": limit,
      // "take": 50,
      // "reverse": false,
      // "offsetFlavorTexts": 50,
      // "takeFlavorTexts": 1,
      // "reverseFlavorTexts": false
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchMore({
          variables: { offset: offset + limit, take: limit},
          updateQuery: (prev, { fetchMoreResult }) => {
            return {
              pokemon: [...prev.pokemon, ...fetchMoreResult.pokemon],
            };
          },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [offset, limit, fetchMore]);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="grid justify-items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokemon</h2>
      <div className="grid grid-cols-6">
        {data && data.getAllPokemon.map(pokemon => <Pokemon key={pokemon.key} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default Pokedex; 