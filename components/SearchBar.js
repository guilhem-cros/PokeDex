app.component('search-bar',{
    props:{
        list: {
            type : Array,
            required : true,
        }
    },
    template:
    /*html*/
    `<div class="searchDiv">
        <h2 id="searchTitle">Name or ID of the Pokémon : </h2>
        <div id="searchBar">
          <input type="text" id="searchField" placeholder="Search for a Pokémon..." @keyup.enter="search">
          <img src="./assets/media/search.png" id="searchLogo" class="button" alt="searchLogo" @click="search">
        </div>
     </div>`,

    data(){
        return{
            listOfResult : [] //contiendra les pokémons à renvoyer
        }
    },
    methods : {
        search(){
            let text = document.getElementById("searchField").value
            let retour = []
            if(text.length>0){
                for(let i=0; i<this.list.length; i++){
                    item = this.list[i]
                    if(item.name.toLowerCase().includes(text.toLowerCase()) || item.id.includes(text)){
                        retour.push(item)
                    }
                }
            }
            this.listOfResult = retour
            this.$emit('searched', this.listOfResult)
        }
    }
})