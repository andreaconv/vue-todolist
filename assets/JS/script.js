const {createApp} = Vue;

createApp({

  data(){

    return {
      msg:'HELLO',
    }

  },

  methods:{
    //FUNZIONI
  },

  mounted() {
    console.log("vue funziona")
  }
}).mount('#app')