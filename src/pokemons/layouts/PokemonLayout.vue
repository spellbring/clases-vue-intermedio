
<script setup lang="ts">

import NavBar from '@/shared/views/components/NavBar.vue';
import { pokemonRoutes } from '../router/index';
import type { RouterLink } from '../../router/list-routes';
    


    const routeLinks: RouterLink[] = pokemonRoutes.children?.map( ({name, path, props}) => {

    

        return {
            name: name?.toString() ?? '',
            path: path,
            title: (props as {title: string}).title,
        }
    }) || [];





</script>

<template>
    <NavBar :links="routeLinks" is-secondary />
    <div>
      <!-- <h4>Pokemon Layout</h4> -->
      <!-- <Suspense> -->
        <RouterView />
        
        <!-- <template #fallback>
          Loading...
        </template>
      </Suspense> -->
      
    </div>
  </template>