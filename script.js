// Descrizione:
// Genera 10 mail tramite api e stampale in una lista

var app = new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then()
})
