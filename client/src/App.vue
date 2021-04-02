<template>
  <div id="app">
    <div v-for="product in products">
        <p>{{product.name}}</p>
      <p>{{product.price}}</p>
      <p>{{product.views}}</p>
      <p>{{product.description}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      product:[];
    }
  },
  mounted(){
    this.getProducts();
  },
  methods:{
    getProducts(){

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
