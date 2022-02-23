app.component('pokemon-detail', {
  props: {
    details: {
        type: Object,
        required: true,
    }
  },

  template:
  /*html*/
  `<div class="pokemon-detail">
    <img :src="image" :alt="details.name" height="300px" class="detailImg">
    <div class="types">
    <h2>Type(s)</h2>
      <ul class="listTypes">
        <li v-for="(item) in details.types">{{ item.type.name }}</li>
      </ul>
    </div>
    <p class="pokeDesc">{{details.flavorText}}</p>
    <div class="bottom-detail">
      <p class="detailName">{{details.name}}</p>
      <p class="id">{{idPrint}}</p>
    </div>
    <p class="back-button" @click="backToList">Back to the list</p>

  </div>`,

  data() {
      return{

      }
  },

  methods: {
    backToList(){
      this.$emit('close-details')
    }

  },

  computed: {
    image(){
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.details.id +  ".svg"
    },
    idPrint(){
      let chaine = ""
      while(chaine.length + this.details.id.length < 3){
        chaine = chaine + "0"
      }
      return "#" + chaine + this.details.id
    },
    size(){
      return this.details.height + " m"
    },
    weight(){
      return this.details.weight + " kg"
    }
  }
})