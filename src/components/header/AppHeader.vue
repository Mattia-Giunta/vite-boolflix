<script>
// import

import { store } from "../../store";

  export default {

    name: "AppHeader",

    emits:[
    'emitGetData'
    ],


    data() {
            
      return {
        store,
      };

    },
    
  };


</script>



<template>
  
  <header>

    <figure>

      <img src="../../../src/assets/img/Netflix_Logo_RGB.png" alt="">

      <input 
      type="text" 
      placeholder="Cerca un Film o Serie TV"
      v-model="store.searchText"/>

      <i class="fa-solid fa-magnifying-glass"
      @click="$emit('emitGetData')"></i>

    </figure>

    
  </header>


</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

figure{
  margin-top: 2%;
  display: flex;
  align-items: center;
  gap: 2%;

  img{
  width: 200px;
  }

  input{
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
  }

  i{
    color: red;
    font-size: 20px;
    cursor: pointer;
  }
}







</style>
