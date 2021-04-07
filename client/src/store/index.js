import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.store({
  state:{
    user:""
  },
  getters:{

  },
  mutators:{
    setUser(state, data){
      state.user = data;
    }
  }

})
