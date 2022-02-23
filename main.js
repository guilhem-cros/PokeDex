const app = Vue.createApp({
    data() {
      return {
        details : [],
        pokemons : [],
        showDetails : false,
      }
    },

    methods: {
        showList(){
          this.details = []
          this.showDetails = false
        },
        sendDetails(details){
          this.details = details
          this.showDetails = true
        }
    },

    computed:{

    },
  })