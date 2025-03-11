Vue.createApp({
  data() {
    return {
      name: null,
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
