import pokedex from '../data.js';
import { findByUnderscoreId } from '../utils.js';
import { getPokeStats } from '../localStorageUtils.js';
import { makeCaughtArray, makeSeenArray, makeLabelArray } from './results.js';



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



var ctx = document.getElementById('myChart').getContext('2d');

const pokeStats = getPokeStats();

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats), // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: makeSeenArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'rgba(255, 99, 132)',
                borderColor: 'black',
                borderWidth: 2
            },
            {
                label: '# of times caught',
                data: makeCaughtArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'black',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30
            }
        }
    }
});
