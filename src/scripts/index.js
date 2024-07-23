import '../styles/index.scss';
import pokebolaIcono from '../img/pokebola.png';

const headerSection = document.querySelector('.header section');
const imgElement = document.createElement('img');
imgElement.src = pokebolaIcono;
imgElement.alt = 'Pokebola';
imgElement.classList.add('logo-img'); // Añadir una clase para estilos

// Insertar la imagen antes del título
headerSection.insertBefore(imgElement, headerSection.querySelector('h1'));