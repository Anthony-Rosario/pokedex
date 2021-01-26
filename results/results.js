import { getPokeStats } from '../localStorageUtils.js';
import { caughtResults, seenResults } from './results-utils.js';

const pokeStats = getPokeStats();


for (const item of pokeStats) {
    caughtResults(item);
    seenResults(item);
}