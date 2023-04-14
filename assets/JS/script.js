const { createApp } = Vue;

createApp({

  data() {

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
      ],
      msgError: '',
    }

  },

  methods: { //FUNZIONI

    elimina(i) {
      if (this.lista[i].done) {
        this.lista.splice(i, 1)
        // this.errorMsg ='';
      } else {
        console.log("devi sbarrare")
        this.msgError= 'Devi sbarrare prima di eliminare'

        // this.writeErrorMSg("attenzione, devi prima cancellare")
      }
    },

    
  },

  mounted() {
    console.log("vue funziona")
  }
}).mount('#app')