app.component('c-header', {
    template :
    /*html*/
    `<header>
        <div id="head1">
          <img src="./assets/media/pokeball.png" alt="pokéball" class="logo">
        </div>
        <div id="head2">
          <img src="./assets/media/pokedex.svg" alt="pokédex" class="titleLog" @click="refresh">
        </div>
    </header>`,
    methods:{
      refresh(){
        location.reload()
      }
    }
})