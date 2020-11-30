var app = new Vue({
    el: "#app",
    data: {
      email:[]
    },
    mounted: function () {
        for(i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(risposta => {
                this.email.push (risposta.data.response);
            })};
            console.log (this.data.email)
     }
  });
  