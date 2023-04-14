const {createApp} = Vue;

createApp({

  data(){

    return {
      lista: [
        {
          text: 'fare spesa',
          done: false,
        },
        {
          text: 'pulire bagno',
          done: true,
        },
        {
          text: 'preparare la cena',
          done: false,
        },
      ]
    }

  },

  methods:{
    //FUNZIONI
    
  },

  mounted() {
    console.log("vue funziona")
    console.log(this.lista[2].text)
  }
}).mount('#app')