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
    <pokemon v-for="(item, index) in normalizedList" :key="index" :index="index" :id="item.id"  :name="item.name" @click="getDetails(item.id)"></pokemon>
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
      emitEvent(event, param){
        $this.$emit(event, param)
      },
      getDetails(i){
        let details = []
        const name = this.list[i].name
        fetch(this.list[i].url).then(function(response){return response.json()}).then(function(data){
          details.push({name : name, id : data.id, weight : data.weight, height : data.height, types : data.types})
          return data.species.url}).then(function(url){
            return fetch(url)}).then(function(resp){
              return resp.json()}).then(function(data2){
            details[0].flavorText = data2.flavor_text_entries[0].flavor_text
            this.pokeDetails = details
          }).then(function(){
            this.emitEvent("show-details", this.pokeDetails)  /// .??????????
          })
        },
    },
    computed: {
      normalizedList(){
        let newList = []
        if(this.list !== undefined){
          for(let i=0; i<this.list.length; i++){
            newList.push({id : this.getId(i), name : this.list[i].name})
          }
          return newList
        }
      },
  }
  })