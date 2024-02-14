
<script>
// import
import { store } from "../../store";

    export default {

        name: "FilmChild",

        props:[
        'propsElement'
        ],

        data() {

            return {
                store,
            };

        },

    };

</script>



<template>

<div class="card-container">
            
    
    <img :src="`https://image.tmdb.org/t/p/w500${propsElement.poster_path}`" alt=""> 


    <div class="film-info">

        <h5>{{ (propsElement.title) ? propsElement.title : propsElement.name  }}</h5>

        <h5>{{ (propsElement.original_title) ? propsElement.original_title : propsElement.original_name }}</h5>
    
        <h5>{{ propsElement.original_language  }}</h5>

        <h5>{{ propsElement.vote_average  }}</h5>

    </div>
    

    
                    
</div>

</template>



<style lang="scss" scoped>

@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.card-container{

    height: 400px;
    min-width: 250px;
    flex-basis: calc(100% / 6 - 15px);
    position: relative;

    &:hover .film-info{
            display: block;
            background-color: rgba(49, 49, 49, 0.849);

        }
    

    img{
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        &:hover{
            opacity: 10%;
        }    
        
    }
        
    .film-info{
        padding: 70px 20px;
        position: absolute;
        color: white;
        width: 100%;
        height: 100%;
        display: none;

        h5{
            margin-top: 20px;
            font-size: 20px;
        }
        
    }
}

</style>