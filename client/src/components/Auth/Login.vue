<template>
<div class="container">
  <div class="form-group">
    <label for="">Email</label>
    <input type="text" class="form-control" v-model="users.email">
  </div>
  <div class="form-group">
    <label for="">Password</label>
    <input type="text" class="form-control" v-model="users.password">
  </div>
  <button class="btn btn-danger" @click="login">Ok</button>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      users:{
        email:"",
        password:""
      },


    }
  },
  methods:{
      login(){
        this.axios.post("http://127.0.0.1:8000/api/auth/login",this.users)
          .then((res) =>{
          const token =  res.data.access_token;
          const user = res.data.user;

          localStorage.setItem("token",JSON.stringify(token));
            localStorage.setItem("user",JSON.stringify(user));
            this.$store.commit("setUser", user);



        })

      }
  }
}
</script>

<style scoped>

</style>
