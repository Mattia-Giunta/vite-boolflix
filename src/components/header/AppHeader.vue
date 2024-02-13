<script>
// import

import { store } from "../../store";

  export default {

    name: "AppHeader",


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

      <input type="text" placeholder="Cerca un Film o Serie TV">

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
  gap: 5%;

  img{
  width: 200px;
  }

  input{
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
  }
}







</style>
