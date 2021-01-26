import pokedex from '../data.js';
import { findByUnderscoreId } from '../utils.js';

export function caughtResults(pokeData) {
    if (pokeData.caught > 0) {
        const table = document.getElementById('pokemon-caught-table');
        const newPokemon = findByUnderscoreId(pokeData._id, pokedex);
        const tr = document.createElement('tr');
        
        const pokeNameTd = document.createElement('td');
        pokeNameTd.textContent = newPokemon.pokemon;
        
        const pokeCaughtTd = document.createElement('td');
        pokeCaughtTd.textContent = pokeData.caught;

        const pokeSeenTd = document.createElement('td');
        pokeSeenTd.textContent = pokeData.seen;
        


        tr.append(pokeNameTd, pokeSeenTd, pokeCaughtTd);
        table.append(tr);

    }
}
