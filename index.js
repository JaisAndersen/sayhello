Vue.createApp({
  data() {
    return {
      message: null,
      age: 29
    }
  },
    methods:{
        sayHello(){
            this.message = "Hello " + this.name
        }
    }
}).mount("#app")
