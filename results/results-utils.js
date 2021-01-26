import pokedex from '../data.js';
import { findByUnderscoreId } from '../utils.js';

export function caughtResults(pokeData) {
    if (pokeData.caught > 0) {
        const table = document.getElementById('pokemon-caught-table');
        const tr = document.createElement('tr');
        const newPokemon = findByUnderscoreId(pokeData._id, pokedex);

        const pokeNameTd = document.createElement('td');
        pokeNameTd.textContent = newPokemon.pokemon;

        const pokeSeenTd = document.createElement('td');
        pokeSeenTd.textContent = pokeData.seen;

        const pokeCaughtTd = document.createElement('td');
        pokeCaughtTd.textContent = pokeData.caught;

        const pokeImg = document.createElement('img');
        const pokeImgTd = document.createElement('td');
        pokeImg.src = newPokemon.url_image;
        pokeImg.classList.add('pokemon-image');
        pokeImgTd.append(pokeImg);

        tr.append(pokeNameTd, pokeSeenTd, pokeCaughtTd, pokeImgTd);
        table.append(tr);

    }
}


// export function seenResults(pokeData) {
//     const table = document.getElementById('encountered-table');
//     const newPokemon = findByUnderscoreId(pokeData._id, pokedex);

//     if (pokeData.caught === 0 && pokeData.seen >= 1) {
//         const 
//     }
// }

