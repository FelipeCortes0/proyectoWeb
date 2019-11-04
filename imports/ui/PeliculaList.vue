<template>
<ul class="todo-list">
    <pelicula v-for="pelicula in peliculas" :key="pelicula._id" :pelicula="pelicula"  ></pelicula>


</ul>
    
</template>

<script>

import Pelicula from './Pelicula'
export default {

    components: {
        Pelicula
    },
            props: ["peliculas"]

    
}
</script>

<style scoped>

</style>