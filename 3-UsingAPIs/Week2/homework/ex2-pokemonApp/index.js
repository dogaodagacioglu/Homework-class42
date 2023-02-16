'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

const url = 'https://pokeapi.co/api/v2/pokemon/'

function fetchData(url) {
  return fetch(url)
  .then(response => {
    if(!response.ok){
      throw new Error('HTTP error')
    }
    const jsonData = response.json();
    return jsonData
  })
  .then(data =>{
    return data
  })
  .catch(error => {
    console.error(`Network error!`);
    throw error;
  })
}

async function fetchAndPopulatePokemons(elements) {
  const data = await fetchData(url);
  data.result.forEach(pokemon => {
    const table = document.createElement('select'); 
    table.textContent = pokemon.name
    elements.append(table);
  })
  
}

async function fetchImage(url) {
  const data = await fetchData(url);
  data.result.forEach(img => {
    const imgPokemon = document.createElement('img');
    imgPokemon.src = img.url;
    
  })
  

}

async function main() {
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(data=>{
        fetchAndPopulatePokemons(data)
      })
      .then(data=>{
        fetchImage(data)
      })
  } catch(error){
    console.log(error);
  }
}

window.addEventListener('load', main);