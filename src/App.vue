<template>
  <div id="app">
      <p>
          <router-link to="/Home">Go to Home</router-link>
          <router-link to="/About">Go to About us page</router-link>
          <router-link to="/Student/:name">Go to Student data </router-link>
      </p>
      <router-view></router-view>
      <notifications group="foo" />
  </div>
</template>

<script>

export default {
  name: 'app',
  components:
      {

       },
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
