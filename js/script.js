new Vue({
  el: '#root',
  data: {
    mailList: []
  },
  mounted() {
    const self = this
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(resp) {
          self.mailList.push(resp.data.response)
        })
    }
  }
})
Vue.config.devtools = true;
