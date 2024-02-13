<script>
// import
import FilmChild from './FilmChild.vue';

import { store } from "../../store";

    export default {

        name: "ListFilm",

        components: {
            FilmChild,
        },

        data() {

            return {
                store,
            };

        },

    };

</script>



<template>

    <div class="container">

        <FilmChild/>

        

        <figure>


            <div class="card-container"></div>

            <div class="card-container"></div>

            <div class="card-container"></div>

            <div class="card-container"></div>

            <div class="card-container"></div>

            <div class="card-container"></div>


               

        </figure>

      


    </div>

</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.container{
    border: 1px solid red;
    margin-top: 5%;
    

    figure{
        display: flex;
        gap: 10px;
        

        
        .card-container{
            background-color: grey;
            height: 400px;
            flex-basis: calc(100% / 5);
            color: white;
        
        }
    }
    
    
    
}

</style>