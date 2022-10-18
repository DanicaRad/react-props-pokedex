import React from 'react';
import './Pokecard.css';

const Pokecard = (pokemon) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return (
    <div className='pokecard' key={pokemon.id}>
      <div className='pokemon-name'>{pokemon.name}</div>
      <img src={imageUrl} className='pokemon-img' alt={pokemon.name}></img>
      <div className='pokemon-stats'>
        <div>Type: {pokemon.type}</div>
        <div>EXP: {pokemon.base_experience}</div>
      </div>
  </div>
  );
};

export default Pokecard;