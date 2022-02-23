app.component('list-pokemon', {
    props:{
      list: {
          type : Array,
          required : true
      }
    },
    template:
    /*html*/
    `<div class="listPoke">
      <pokemon v-for="(item, index) in normalizedList" :key="index" :index="index" :id="item.id"  :name="item.name" :url="item.url" @show-details="emitDetails"></pokemon>
    </div>`,

    data() {
        return{
            pokeDetails : []
        }
    },

    methods: {
      getId(i){
        let retour = ""
        let url = this.list[i].url
        let n=url.length-2
        while(url.charAt(n)!="/"){
          retour = url.charAt(n).concat(retour)
          n--
        }
        return retour
      },
      emitDetails(details){
        this.$emit('send-details', details)
      }
    },

    computed: {
      normalizedList(){
        let newList = []
        if(this.list !== undefined){
          for(let i=0; i<this.list.length; i++){
            newList.push({id : this.getId(i), name : this.list[i].name, url : this.list[i].url})
          }
          return newList
        }
      },
  }
  })