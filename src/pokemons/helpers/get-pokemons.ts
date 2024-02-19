import pokemonApi from "../api/pokemonApi";
import type { PokemonsListResponse, Pokemon, PokemonResponse } from "../interfaces";
import axios from 'axios'
//import { sleep } from "./sleep";



export const getPokemons = async(): Promise<Pokemon[]> => {

  //  await sleep(0.5)

    const {data} = await pokemonApi.get<PokemonsListResponse>('/pokemon?limit=60')

    const pokemonPromises: Promise<Pokemon>[] = [];

    for (const {url} of data.results){
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({data}) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
            }
        })

        pokemonPromises.push( pokemonPromise );

    }

    return await Promise.all( pokemonPromises)
    
   
}