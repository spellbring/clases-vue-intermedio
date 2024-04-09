
<script setup lang="ts">
import store from '@/store/pokemon.store';
import PokemonCardList from '../components/PokemonCardList.vue';

</script>

<template>
    <h1 v-if="store.pokemons.isLoading">Loading</h1>
    <div v-else="store.pokemons.hasError">
        {{ store.pokemons.errorMessage }}
    </div>

    <div v-else>
        <h1>Pokemon List Native - {{store.pokemons.count}}</h1>
       <PokemonCardList :pokemons="store.pokemons.list"
       />
    </div>
</template>
