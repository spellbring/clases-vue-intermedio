
<script setup lang="ts">
// import { ref, computed } from 'vue';
// import { getPokemons } from '../helpers/get-pokemons';
// import type { Pokemon } from '../interfaces';


import {usePokemons} from '../composables/usePokemons';

const {pokemons, isLoading, count} = usePokemons();


    // const pokemons = ref<Pokemon[]>([])
    // const isLoading = ref(true);

    // getPokemons().then( data => {
    //     pokemons.value = data;
    //     isLoading.value = false;
        
    // });
    // const count =  computed(() => pokemons.value.length)


</script>

<template>
    <div>
        <h1>Pokemon List - {{count}}</h1>
        <h3 v-if="isLoading">Cargando...</h3>

        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id"> 
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>
