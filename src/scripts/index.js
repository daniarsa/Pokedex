import '../styles/index.scss';
import { getPokemons } from './api';
import { paintPokemons } from './pintar-pokemones';
import { loadPokemonFooter } from './footer.js'; 
import pokebolaIcono from '../img/logopokebola.png';


const init = async () => {
    const initialPokemon = await getPokemons(25);
    paintPokemons(initialPokemon);
    loadPokemonFooter();
  };
  
  init();

const headerSection = document.querySelector('.header section');
const imgElement = document.createElement('img');
imgElement.src = pokebolaIcono;
imgElement.alt = 'Pokebola';
imgElement.classList.add('logo-img'); // Añadir una clase para estilos

// Insertar la imagen antes del título
headerSection.insertBefore(imgElement, headerSection.querySelector('h1'));

// Obtener elementos del DOM
const searchForm = document.getElementById('busqueda');
const searchInput = document.getElementById('inputBusqueda');

// Función para manejar el envío del formulario
const handleSearchSubmit = async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    await loadPokemonFooter(query);
    await loadPokemonMain(query);
  }
};

// Función para manejar la búsqueda dinámica
const handleSearchInput = async () => {
  const query = searchInput.value.trim();
  if (query.length > 1) { // Para evitar realizar búsquedas con solo un carácter
    await loadPokemonFooter(query);
    await loadPokemonMain(query);
  } else if (query.length === 0) {
    await loadPokemonFooter();  // Mostrar Pokémon aleatorios si no hay búsqueda
  }
};

const loadPokemonMain = async (query = '') => {
  const pokemonDetailsContainer = document.getElementById('pokemon-details');
  pokemonDetailsContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos resultados

  if (query) {
    try {
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      showError('Ocurrió un error al buscar el Pokémon. Intenta nuevamente.');
    }
  }
};


// Agregar el manejador de eventos al formulario y al campo de búsqueda
searchForm.addEventListener('submit', handleSearchSubmit);
searchInput.addEventListener('input', handleSearchInput);