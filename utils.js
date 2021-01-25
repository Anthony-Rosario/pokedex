import pokemon from 'data.js';
import { incrementViewed, incrementCaught } from './localStorageUitls.js';

let pokeBalls = 5;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}



export function setThreePokemon() {
    pokeBalls--;

    let pokemonOne = getRandomPokemon();
    let pokemonTwo = getRandomPokemon();
    let pokemonThree = getRandomPokemon();

    while (pokemonOne._id === pokemonTwo._id || pokemonOne._id === pokemonThree._id || pokemonTwo._id === pokemonThree._id) {
        pokemonOne = getRandomPokemon();
        pokemonTwo = getRandomPokemon();
        pokemonThree = getRandomPokemon();
    }

    const img1 = renderPokeImg();
    const img2 = renderPokeImg();
    const img3 = renderPokeImg();
    
    incrementViewed(pokemonOne._id);
    incrementViewed(pokemonTwo._id);
    incrementViewed(pokemonThree._id);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}


export function renderPokeImg(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('pokemon-img');
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);

        if (pokeBalls > 5) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });
}