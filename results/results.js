import { getPokeStats } from '../localStorageUtils.js';
import { caughtResults } from './results-utils.js';

const pokeStats = getPokeStats();


for (const item of pokeStats) {
    caughtResults(item);
    // renderLineItems(item);
}