

const app = Vue.createApp({
    data() {
      return {
        allPokemon : P.getPokemonsList(interval),
        details : [],
        showDetails : false,
      }
    },
    methods: {
        showDetails(id){
            this.details.push(id) //get les infos utiles du pokemon de l'id id
            this.showDetails = true
        },
    }
  })
