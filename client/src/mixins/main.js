import Vue from 'vue'

export default Vue.mixin({
  methods:{
    consoleTime2(){
      const d = new Date();
      console.log(d.getTime(), 2)
    }
  }
})
