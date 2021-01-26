import pokemon from './data.js';
import { incrementViewed, incrementCaught } from './localStorageUtils.js';


const userRoundsPlayed = document.querySelector('rounds-played');
let pokeBalls = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(_id, array) {
    for (let item of array) {
        if (item._id === _id) return item;
    }
    return null;
}





export function setThreePokemon() {
    pokeBalls++;

    let pokemonOne = getRandomPokemon();
    let pokemonTwo = getRandomPokemon();
    let pokemonThree = getRandomPokemon();

    while (pokemonOne._id === pokemonTwo._id || pokemonOne._id === pokemonThree._id || pokemonTwo._id === pokemonThree._id) {
        pokemonOne = getRandomPokemon();
        pokemonTwo = getRandomPokemon();
        pokemonThree = getRandomPokemon();
    }

    const img1 = renderPokeImg(pokemonOne);
    const img2 = renderPokeImg(pokemonTwo);
    const img3 = renderPokeImg(pokemonThree);
    
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

        if (pokeBalls < 10) {
            setThreePokemon();
        } else {
            window.location = './results/index.html';
        }
    });

    return image;
}

let rounds = 0;

export function roundsPlayed() {
    rounds = rounds + 1;

    userRoundsPlayed.textContent = rounds;

    if (rounds === 10) {
        userRoundsPlayed.textContent = rounds;
        alert('Click to see if your a Pokemon Master!');
    }

    return rounds;
    
}