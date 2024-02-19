import axios from "axios";


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

//pokemonApi.get('pokemon?limit=151')

export default pokemonApi;