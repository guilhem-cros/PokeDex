app.component('pokemon-detail', {
  props:{
    details :{
        type : Array,
        required: true
    }
  },
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

      }
  },
  methods: {

  },
  computed: {

  }
})