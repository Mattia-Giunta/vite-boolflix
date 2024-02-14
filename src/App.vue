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

    getTopRated() {

      store.apiTopRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=0ba99d9de73107114d69b64eea8aeebe';

      axios

        .get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=0ba99d9de73107114d69b64eea8aeebe")

        .then((result) => {

          store.topRatedList = result.data.results;

        });
    },
    getFilm(){

      
      

      if ( store.searchText ){

        axios

        .get(`https://api.themoviedb.org/3/search/movie?query=${store.searchText}&api_key=0ba99d9de73107114d69b64eea8aeebe`)

        .then((result) => {

          store.filmList = result.data.results;

        });
      }

      

    },
    getTv(){

      

      if ( store.searchText ){

        axios

        .get(`https://api.themoviedb.org/3/search/tv?api_key=0ba99d9de73107114d69b64eea8aeebe&query=${store.searchText}`)

        .then((result) => {

        store.tvList = result.data.results;

        });
      }

      


    },
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
