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
      <pokemon v-for="(item, index) in this.list" :key="index" :index="index" :id="item.id"  :name="item.name" :url="item.url" @show-details="emitDetails"></pokemon>
    </div>`,

    data() {
        return{
            pokeDetails : []
        }
    },

    methods: {
      emitDetails(details){
        this.$emit('send-details', details)
      }
    },

    computed: {
    }
  })