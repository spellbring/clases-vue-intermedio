import { computed } from 'vue';
import type { Pokemon } from "../interfaces";
import { getPokemons } from '../helpers/get-pokemons';
import {useQuery} from "@tanstack/vue-query"


export const usePokemons = () => {


    const { isLoading, data:pokemons, isError, error  } = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
      })
      

      return {
        //Properties
       pokemons,
       isLoading,
       isError,
       error,
       
       //computed
       count:  computed(()=>pokemons.value?.length ?? 0)
      }
   
}