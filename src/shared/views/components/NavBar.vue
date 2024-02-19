
<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes';


interface Props {
  title?: string
  links: RouterLink[],
  isSecondary?: boolean,

}

withDefaults(defineProps<Props>(),{ 
  title: 'CompoApp',
  isSecondary: false,
})

</script>


<template>
   <nav>
    <template v-if="!$props.isSecondary">

      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <span v-if="$props.title">{{$props.title}}</span>
    
    </template>
  
   </nav>
    <RouterLink 
    v-for="router of $props.links"
     :to="router.path"
     :key="router.path"
    >
     {{router.title}}
   </RouterLink>
   
</template>



<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
   margin-right: 5px; 
}



nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>