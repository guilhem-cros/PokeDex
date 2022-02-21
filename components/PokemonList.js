app.component('list-pokemon', {
    props:{
      list: {
          type : Array,
          required : false
      }
    },
    template:
    /*html*/
    `<div class="listPoke">
      <div class="col1">
        <img src="assets/media/mugigragass.jpg" alt="mudi" class="pokeImg">
      </div>
      <div class="col2">
        <img src="assets/media/mugigragass.jpg" alt="mudi" class="pokeImg">
      </div>
      <div class="col3">
        <img src="assets/media/mugigragass.jpg" alt="mudi" class="pokeImg">
      </div>
      <div class="col4">
        <img src="assets/media/mugigragass.jpg" alt="mudi" class="pokeImg">
      </div>
    </div>`,
    data() {
        return{
            count : 0
        }
    },
    methods: {

    },
    computed: {

    }
  })