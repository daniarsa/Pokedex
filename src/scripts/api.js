import axios from 'axios';

export const getPokemons = async (id) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
    } catch (error) {
    console.error("Error al obtener la data del Pokemon", error);
    }
};