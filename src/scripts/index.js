import '../styles/index.scss';
import { obtenerPokemon } from './api';
import { pintarPokemones } from './pintar-pokemones';
import { loadPokemonFooter } from './footer.js'; 
import pokebolaIcono from '../img/pokebola.png';


const init = async () => {
    const initialPokemon = await obtenerPokemon(48);
    pintarPokemones(initialPokemon);
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