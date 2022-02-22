const app = Vue.createApp({
    data() {
      return {
        details : [],
        pokemons : [],
        showDetails : false,
      }
    },
    methods: {
        swapDisplay(){
          this.showDetails=!this.showDetails
        }
    },
    computed:{
      
    },
  })