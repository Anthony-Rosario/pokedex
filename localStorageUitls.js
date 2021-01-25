const POKESTATS = 'POKESTATS';
import { findByUnderscoreId } from './utils.js';



export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    } 
    return stats;
}


export function setPokeStats(newStats) {
    
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));

}



export function incrementViewed(_id) {
    const stats = getPokeStats();

    const pokeId = findByUnderscoreId(stats, _id);

    if (!pokeId) {
        
        const newStat = {
            _id: _id,
            viewed: 1,
            caught: 0
        };
        
        stats.push(newStat);
    
    } else {
        
        pokeId.viewed++;
    }

    setPokeStats(stats);
}


export function incrementCaught(_id) {
    const stats = getPokeStats();

    const pokeId = findByUnderscoreId(stats, _id);

    pokeId.caught++;

    setPokeStats();
}