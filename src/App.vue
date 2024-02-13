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

    this.requestRandomMail();

  },
  methods: {

    requestRandomMail() {

      axios

        .get("https://flynn.boolean.careers/exercises/api/random/mail")

        .then((result) => {

          store.randomMail = result.data.response;

        });
    },
  },
};

</script>



<template>



  <AppHeader />

  <main>

    <ListFilm/>

  </main>



</template>



<style lang="scss">

@use "./styles/general.scss";





</style>
