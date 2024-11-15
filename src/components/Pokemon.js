import React from 'react';
import { Link } from 'react-router-dom';
const Pokemon = ({pokemon}) => {

  return ( 
    <div 
      className="border rounded-lg p-4 m-2 flex flex-col justify-center items-center bg-primary cursor-pointer">
      <Link to={`/pokemon/${pokemon.key}`}>
        <h3 className="text-lg text-gray-700">
          {pokemon.key.toUpperCase()}
        </h3>
        <img src={pokemon.sprite} alt={pokemon.key} className="hover:animate-spin" />
       
        <div className='flex flex-row m-4 content-between m-2'>
          {pokemon.types.map(type => (
            <span key={type.name} className={`inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium ${type.name.toLowerCase()} ring-1 ring-inset m-1`}>
              {type.name}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
export default Pokemon;
