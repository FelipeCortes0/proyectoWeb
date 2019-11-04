<template>

<section class="todoapp"> 
    <header class="header">
        <h1>Películas </h1>
        <input v-model="name" @keypress.enter="agregarNuevaPelicula"
        
        
        class="new-todo" type="text" autofocus="autofocus" autocomplete="off" placeholder=" ¿ Que película deseas ver ?">

    </header>


</section>
    
</template>

<script>

import { Peliculas } from '../../api/peliculas'
export default {
    data(){
        return {
            name:""
        };
    },

    methods : {
        agregarNuevaPelicula(){
            let nuevaPelicula = {
                name: this.name,
                anoEstreno:"",
                genero:"",
                duracion:0,
                calificacion:0,
                poster:"",
                actoresPrincipales:"",
                sinopsis:"",
                reseña:"",
                director:""

            };
            Peliculas.insert(nuevaPelicula);
            this.name="";

        }
    }

    
}
</script>

<style scoped>
h1 {
    font-size: 70px;
}

</style>