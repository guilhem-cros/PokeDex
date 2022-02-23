app.component('pokemon', {
    props:{
        id:{
            type : String,
            required : true
        },
        name:{
            type : String,
            required : true
        },
        index:{
            type: Number,
            required : true
        },
        url:{
            type : String,
            required : true
        }
    },

    template:
    /*html*/
    `<div class="pokemon" :class="colClass" @click="sendDatas">
      <img :src="image" :alt="name" class="pokeImg">
      <div class="pokeInfo">
        <p class="pokeName">{{ this.name }}</p>
        <p class="pokeId">{{ idPrint }}</p>
      </div>
    </div>`,
    data(){
        return{
            
        }
    },

    computed:{
        image(){
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.id +  ".svg"
        },
        idPrint(){
            let chaine = ""
            while(chaine.length + this.id.length < 3){
                chaine = chaine + "0"
            }
            return "#" + chaine + this.id
        },
        colClass(){
            return "col" + (this.index%4+1)
        }
    },

    methods:{
        getDatas : async function(){
        let details = []
        const name = this.name
        const id = this.id
        return fetch(this.url).then(function(response){return response.json()}).then(function(data){
          details.push({name : name, id : id, weight : data.weight, height : data.height, types : data.types})
          return data.species.url}).then(function(url){
            return fetch(url)}).then(function(resp){
              return resp.json()}).then(function(data2){
            details[0].flavorText = data2.flavor_text_entries[0].flavor_text
            return details
          })
        },
        sendDatas : async function(){
            const details = await this.getDatas()
            this.$emit('show-details', details)
        },
    }


})