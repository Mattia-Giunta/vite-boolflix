import { reactive } from "vue";

export const store = reactive({

  loading: "true",
  filmList:[],
  selectValue: '',
  apiUrl:"https://api.themoviedb.org/3/search/movie?api_key=0ba99d9de73107114d69b64eea8aeebe",

  apiTopRatedUrl:"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=0ba99d9de73107114d69b64eea8aeebe"
  
});
