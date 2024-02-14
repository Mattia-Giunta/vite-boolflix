<script>

import AppHeader from "./components/header/AppHeader.vue";
import ListFilm from "./components/main/ListFilm.vue";

import { store } from "./store";

import axios from "axios";



export default {
  
  components: {
    AppHeader,
    ListFilm,
  },

  data() {

    return {
      store,
      
    };

  },
  created() {

    this.getTopRated();

  },
  methods: {

    // funzione che permette tramite la chiamata axios di prendere i film TopRated
    getTopRated() {

      store.apiTopRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=0ba99d9de73107114d69b64eea8aeebe';

      axios

        .get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=0ba99d9de73107114d69b64eea8aeebe")

        .then((result) => {

          store.topRatedList = result.data.results;

        });
    },
    // funzione che permette tramite la chiamata axios di prendere i film
    getFilm(){

      
      

      if ( store.searchText ){

        axios

        .get(`https://api.themoviedb.org/3/search/movie?query=${store.searchText}&api_key=0ba99d9de73107114d69b64eea8aeebe`)

        .then((result) => {

          store.filmList = result.data.results;

        });
      }

      
      

    },
    // funzione che permette tramite la chiamata axios di prendere le serie tv
    getTv(){

      

      if ( store.searchText ){

        axios

        .get(`https://api.themoviedb.org/3/search/tv?api_key=0ba99d9de73107114d69b64eea8aeebe&query=${store.searchText}`)

        .then((result) => {

        store.tvList = result.data.results;

        store.searchText = "";
        });

      }

      


    },
    // funzione che permette di accoppiare le funzioni al searc dell'emit
    search(){

      this.getFilm()
      this.getTv()

    }

  },
};

</script>



<template>



  <AppHeader  @emitGetData="search"/>

  <h1>Top Rated Film</h1>

  <main>

    <ListFilm/>

  </main>



</template>



<style lang="scss">

@use "./styles/general.scss";


h1{
  margin-top: 2%;
  color: gray;
  text-transform: uppercase;
}


</style>
