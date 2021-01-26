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


export function makeSeenArray(objectsArray) {
    
    const seenArray = [];

    for (let item of objectsArray) {
        
        seenArray.push(item.seen);
    
    }
    
    return seenArray;
}


export function makeCaughtArray(objectsArray) {
    
    const caughtArray = [];
    
    for (let item of objectsArray) {
        
        caughtArray.push(item.caught);
    
    }
    
    return caughtArray;
}


export function makeLabelArray(objectsArray) {
    
    const nameArray = [];
    
    for (let item of objectsArray) {
        
        nameArray.push(item.name);
    
    }
    
    return nameArray;
}
