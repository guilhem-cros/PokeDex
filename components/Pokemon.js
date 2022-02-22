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
        }
    },
    template:
    /*html*/
    `<div class="pokemon" :class="colClass">
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
            return "#" + chaine + this.id
        },
        colClass(){
            return "col" + (this.index%4+1)
        }
    },
    method:{
    }


})