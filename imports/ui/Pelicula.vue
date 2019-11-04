<template>
<li class="todo">
<div class="view">
<input class="toggle" type="checkbox">
<!--<input v-else type="checkbox"> -->
<label> {{pelicula.nombre}} </label>
<button class="destroy"></button>
</div>
</li>
    
</template>

<script>
export default {
    props: ["pelicula"]
    
};
</script>

<style scoped>

</style>