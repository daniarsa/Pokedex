import '../styles/index.scss';
import { getPokemons } from './api';
import { paintPokemons } from './pintar-pokemones';
import { loadPokemonFooter } from './footer.js'; 
import pokebolaIcono from '../img/pokebola1.jpg';


const init = async () => {
    const initialPokemon = await getPokemons(25);
    paintPokemons(initialPokemon);
    loadPokemonFooter();
  };
  
  init();

// Insertar la imagen del logo
const headerSection = document.querySelector('.header section');
const imgElement = document.createElement('img');
imgElement.src = pokebolaIcono;
imgElement.alt = 'Pokebola';
imgElement.classList.add('logo-img'); // Añadir una clase para estilos

// Insertar la imagen antes del título
headerSection.insertBefore(imgElement, headerSection.querySelector('h1'));

const searchForm = document.getElementById("busqueda");
const searchInput = document.getElementById("inputBusqueda");

// Función para manejar el envío del formulario
const handleSearchSubmit = async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    await loadPokemonFooter(query);
  } else {
    await loadPokemonFooter(); // Mostrar Pokémon aleatorios si no hay búsqueda
  }
};

searchForm.addEventListener("submit", handleSearchSubmit);


//Modo oscuro

// Obtener el botón y el cuerpo del documento
const toggleButton = document.getElementById('toggle_dark_mode');
const body = document.body;

// Función para alternar el modo oscuro
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark_mode');
  toggleButton.classList.toggle('active');
});