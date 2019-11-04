<template>

<section class="main"> 
        <input  type="checkbox" class="toggle-all">
        <pelicula-list :peliculas="peliculas"></pelicula-list>


</section>
    
</template>

<script>
import PeliculaList from '../PeliculaList'
export default {
        components: {
                PeliculaList
        },
        props:["peliculas"]
        
    
}
</script>

<style scoped>


</style>