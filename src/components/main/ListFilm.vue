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

        

        <figure>


            <!-- richiamo del componente figlio -->
            <FilmChild v-for="(element,index) in store.topRatedList" 
            :key="index"
            :propsElement="element"/>
            

               

        </figure>

        <h1>La tua ricerca</h1>
        <div >

            <h2>Film</h2>

            <div class="search-area">
                <FilmChild v-for="(element,index) in store.filmList" 
                :key="index"
                :propsElement="element" />
            </div>
            

            <h2>Serie TV</h2>

            <div class="search-area">
                <FilmChild v-for="(element,index) in store.tvList" 
                :key="index"
                :propsElement="element" />
            </div>

        </div>


    </div>

</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.container{
    
    

    figure{
        display: flex;
        gap: 5px;
        overflow: auto;
        border: 1px solid red;
    
    }
    
    h2{
        color: gray;
        text-transform: uppercase;
        margin-top: 2%;
        font-size: 30px;
    }
    .search-area{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    
}

</style>