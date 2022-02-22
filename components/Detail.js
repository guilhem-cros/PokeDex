app.component('pokemon-detail', {
  template:
  /*html*/
  `<div class="pokemon-detail">
    <img src="assets/media/mugigragass.jpg" alt="img" height="300px" class="detailImg">
    <p class="id">#id</p>
    <h2 class="pokeName">Name</h2>
    <ul class="types">
      <li>Feu</li>
      <li>Dragon</li>
      <li>Dragon</li>
    </ul>
    <p class="pokeDesc">C'est un putain de pokémon chef</p>
    <p class="empty"></p>
  </div>`,
  data() {
      return{
        id : ""
      }
  },
  methods: {
    showPokemon(details){
      console.log("1")
      console.log(details)
      this.id=details.id
      this.$emit('details-showing')
    }

  },
  computed: {
    image(){
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.id +  ".svg"
    },
    idPrint(){
      let chaine = ""
      return "#" + chaine + this.id
    },
  }
})