const app = Vue.createApp({
    data() {
      return {
        details : [],
        pokemons : [], //liste de base récupéré depuis l'api
        showDetails : false,
        normalizedList : [] //liste normalisée contenant : name, id, url
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
        },
        getId(i){
          let retour = ""
          let url = this.pokemons[i].url
          let n=url.length-2
          while(url.charAt(n)!="/"){
            retour = url.charAt(n).concat(retour)
            n--
          }
          return retour
        },
        emitDetails(details){
          this.$emit('send-details', details)
        },
        getFiltredList(list){
          if(list.length>0){
            this.normalizedList = list.slice()
          }
        },
        normalizeList(){
          let newList = []
          if(this.pokemons !== undefined){
            for(let i=0; i<this.pokemons.length; i++){
              newList.push({id : this.getId(i), name : this.pokemons[i].name, url : this.pokemons[i].url})
            }
            this.normalizedList = newList.slice()
          }
        }
    },

    computed:{
      fixedList(){
        let newList = []
        if(this.pokemons !== undefined){
          for(let i=0; i<this.pokemons.length; i++){
            newList.push({id : this.getId(i), name : this.pokemons[i].name, url : this.pokemons[i].url})
          }
          return newList
        }
      }
    },
  })