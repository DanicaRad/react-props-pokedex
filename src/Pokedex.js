import React from 'react';
import Pokecard from './Pokecard';
import pokemons from './pokemons';
import './Pokedex.css';

const Pokedex = ({cards = pokemons}) => {
  return (
    <div className='pokedex'>
      <h1 className='pokedex-header'>Pokedex</h1>
      {cards.map(pokemon => Pokecard(pokemon))}
    </div>
  );
}

export default Pokedex;
