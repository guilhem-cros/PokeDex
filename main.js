const app = Vue.createApp({
    data() {
      return {
        details : [],
        showDetails : false,
        pokemons : []

      }
    },
    methods: {
        showDetails(id){
            this.details.push(id) //get les infos utiles du pokemon de l'id id
            this.showDetails = true
        },
        getAllPokemons(begin, range){
          const interval = {offset : begin, limit : range}
          P.getPokemonsList(interval).then(function(response){ //récupération des infos pokémons
          pokemons = response.results
          })
        },
        showAllPokemons(){
          this.showDetails=false

        }
    }
  })