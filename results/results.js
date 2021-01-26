import { getPokeStats, clearPokeStats } from '../localStorageUtils.js';
import { caughtResults } from './results-utils.js';

const pokeStats = getPokeStats();


for (const item of pokeStats) {
    caughtResults(item);
}

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    clearPokeStats();
    window.location = '../';
});