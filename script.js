// Descrizione:
// Genera 10 mail tramite api e stampale in una lista

var app = new Vue({
  el: '#app',
  data: {
    listaMail: [],
  },
  mounted: function () {
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {
        //console.log(risposta); elemento chiamato completo
        // console.log(risposta.data.response); proprietà dell'obj che mi serve --> mail random generata.
        this.listaMail.push(risposta.data.response);
      });
    }
  }
});
