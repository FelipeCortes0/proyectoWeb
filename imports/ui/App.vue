
<template>
<section class="todoapp"> 
    <header-section> </header-section>
    <main-section :peliculas="peliculas"> </main-section>
    <footer-section :peliculas="peliculas"> </footer-section>



</section>

</template>



<script>
import Header from './shared/HeaderSection';
import Main from './shared/MainSection';
import footer from './shared/FooterSection';

import { Peliculas } from '../api/peliculas'

export default {

    data(){
        return {
        };
    },

    components: {
        "header-section": Header,
        "main-section": Main,
        "footer-section": footer
    },

    meteor: {
        
            peliculas(){
                return  Peliculas.find({}).fetch();
            }

        
    }
    };
</script>

<style scoped>
 

</style>