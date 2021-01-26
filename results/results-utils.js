import pokedex from '../data.js';
import { findByUnderscoreId } from '../utils.js';

export function caughtResults(pokeData) {
    if (pokeData.caught > 0) {
        const table = document.getElementById('pokemon-caught-table');
        const newPokemon = findByUnderscoreId(pokeData._id, pokedex);
        const tr = document.createElement('tr');
        
        // const pokeImg = document.createElement('img');
        // const pokeImgTd = document.createElement('td');
        // pokeImg.src = newPokemon.url_image;
        // pokeImg.classList.add('pokemon-image');
        // pokeImgTd.append(pokeImg);
        
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


export function seenResults(pokeData) {
    const table = document.getElementById('encountered-table');
    const newPokemon = findByUnderscoreId(pokeData._id, pokedex);

    if (pokeData.caught === 0 && pokeData.seen >= 1) {
        const seenP = document.createElement('p');
        seenP.textContent = newPokemon.pokemon;
        table.append(seenP);
        
        const pokeImg = document.createElement('img');
        pokeImg.src = newPokemon.url_image;
        pokeImg.classList.add('pokemon-image');
        table.append(pokeImg);
    }
}

