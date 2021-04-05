<template>
<div>
  <h1>Register</h1>
  <div class="container">
    <div class="form-group">
      <div>
      <label for="">Name</label>
      <input type="text" class="form-control" v-model="user.name">
      </div>
      <div>
        <label for="">Surname</label>
        <input type="text" class="form-control" v-model="user.surname">
      </div>
      <div>
        <label for="">Email</label>
        <input type="text" class="form-control" v-model="user.email">
      </div>
      <div>
        <label for="">Password</label>
        <input type="text" class="form-control" v-model="user.password">
      </div>
      <button class="btn btn-danger" @click="register">Ok</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      user:{
        name:"",
        surname:"",
        email:"",
        password:""
      }
    }
  },
  methods:{
      register(){

          this.axios.post("http://127.0.0.1:8000/api/auth/signup",this.user)
          .then((response) => {
            this.$router.push({name : "Login"});
          })

      }
  }
}
</script>

<style scoped>

</style>
