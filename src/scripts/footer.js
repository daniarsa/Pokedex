
import { getPokemons } from './api.js';
import { paintPokemons } from './pintar-pokemones.js';

// Función para obtener un Pokémon aleatorio
const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // Suponiendo que hay 898 Pokémon
  return await getPokemons(randomId);
};

// Función para obtener Pokémon por nombre
const getPokemonByName = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching the Pokémon data', error);
    return null;
  }
};

// Función para asignar clase según el tipo de Pokémon
const getTypeClass = (type) => {
  switch (type) {
    case 'fire':
      return 'type-fire';
    case 'water':
      return 'type-water';
    case 'grass':
      return 'type-grass';
    case 'bug':
      return 'type-bug';
    case 'electric':
      return 'type-electric';
    case 'steel':
      return 'type-steel';
    case 'psychic':
      return 'type-psychic';
    case 'fairy':
      return 'type-fairy';
    case 'normal':
      return 'type-normal';
    case 'ghost':
      return 'type-ghost';
    case 'rock':
      return 'type-rock';
    case 'dark':
      return 'type-dark';
    case 'poison':
      return 'type-poison';
    // Agrega más tipos según sea necesario
    default:
      return 'type-default';
  }
};

// Función para crear y mostrar tarjetas de Pokémon
const createPokemonCard = (pokemon) => {
  if (!pokemon) return null;

  const typeClass = getTypeClass(pokemon.types[0].type.name);
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card', typeClass);
  pokemonCard.dataset.pokemonId = pokemon.id; // Añadir el ID del Pokémon como data-attribute

  // Añadir la imagen del Pokémon
  const pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
  pokemonImg.alt = pokemon.name;
  pokemonImg.classList.add('pokemon-img');

  // Añadir el nombre del Pokémon
  const pokemonName = document.createElement('p');
  pokemonName.textContent = pokemon.name;
  pokemonName.classList.add('pokemon-name');

  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  // Añadir el evento de clic para mostrar los detalles en el main
  pokemonCard.addEventListener('click', async () => {
    const pokemonId = pokemonCard.dataset.pokemonId;
    const pokemon = await getPokemons(pokemonId);
    paintPokemons(pokemon);
  });

  return pokemonCard;
};

// Función para mostrar mensaje de error
const showError = (message) => {
  const pokemonCardsContainer = document.getElementById('pokemon-cards');
  pokemonCardsContainer.innerHTML = `<p class="error-message">${message}</p>`;
};

// Función para cargar Pokémon en el footer según búsqueda o aleatoriamente
export const loadPokemonFooter = async (query = '') => {
  const pokemonCardsContainer = document.getElementById('pokemon-cards');
  pokemonCardsContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos resultados

  if (query) {
    // Mostrar resultados de búsqueda
    const pokemon = await getPokemonByName(query);
    if (pokemon) {
      pokemonCardsContainer.appendChild(createPokemonCard(pokemon));
    } else {
      showError('Pokémon no encontrado. Intenta con otro nombre.');
    }
  } else {
    // Obtener y mostrar 4 Pokémon aleatorios
    for (let i = 0; i < 4; i++) {
      const pokemon = await getRandomPokemon();
      pokemonCardsContainer.appendChild(createPokemonCard(pokemon));
    }
  }
};