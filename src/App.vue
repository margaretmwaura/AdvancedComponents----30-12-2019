<template>
  <div id="app">
      <div id="app_rou">
          <div id="app_rou_inner">
              <router-link to="/Home" id="thing">Home</router-link>
              <router-link to="/About" id="thingt">About us</router-link>
              <router-link to="/Student/:name" id="thingth"> Student </router-link>
          </div>

      </div>
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

<style lang="scss">
    @import "../foundation/css/app.css";
    @import "../foundation/css/foundation.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


    &_rou
    {
        width: 100%;
        height: 100px;
        background-color: indianred;

        &_inner
        {
            padding-top: 50px;
            text-align: center;

            #thing
            {
                color: indigo;
                margin-right: 50px;
                text-decoration: none;

            }
            #thingt
            {
                color: indigo;
                margin-right: 50px;
                text-decoration: none;
            }
            #thingth
            {
                color: indigo;
                margin-right: 50px;
                text-decoration: none;
            }
        }
    }


}

</style>
