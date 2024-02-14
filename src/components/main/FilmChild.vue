
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
                numeroConTreDecimali: this.propsElement.vote_average ,
                risultatoArrotondato: null,
                stelline: null
            };

        },
        mounted() {

            this.risultatoArrotondato = this.arrotondaPerEccesso(this.numeroConTreDecimali);
            this.stelline = this.risultatoArrotondato ? this.generaStelline(this.risultatoArrotondato) : "No vote";
        },
        methods: {
            // funzione che permette di trasformare il "vote_average" e arrotondarlo per eccesso
            arrotondaPerEccesso(num) {

                let numMoltiplicato = num * 10;
                let numArrotondato = Math.ceil(numMoltiplicato);
                let risultato = numArrotondato / 10;
                return risultato;
            },

            // funzione che abbina il numero in stelline colorate e con una condizione che mette quelle rimanenti vuote
            generaStelline(num) {

                let stelline = '';
                let parteInteri = Math.floor(num); // Parte intera del numero arrotondato
                let stelleDaGenerare = Math.min(parteInteri, 5); // Massimo 5 stelle

                for (var i = 0; i < 5; i++) {
                        if (i < stelleDaGenerare) {
                            stelline += '⭐'; // Aggiungi una stella piena
                        } else {
                            stelline += '☆'; // Aggiungi una stella vuota
                        }
                    }
                return stelline;
                
            }
        }

    };

</script>



<template>

<div class="card-container">
            
    <div>

        <img 
        v-if="propsElement.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${propsElement.poster_path}`"
        alt=""> 
            
        <span v-else>NO IMAGE</span>

    </div>
    


    <div class="film-info">

        <h5>{{ (propsElement.title) ? propsElement.title : propsElement.name  }}</h5>

        <h5>{{ (propsElement.original_title) ? propsElement.original_title : propsElement.original_name }}</h5>
    
        <h5 :class="`lang-icon lang-icon-${propsElement.original_language}`"></h5>

        <h5>Vote: {{ stelline }}</h5>

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

    span{
        font-size: 30px;
        position: absolute;
        color: red;
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