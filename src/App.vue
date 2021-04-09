<template>
  <v-app id="app">
    <header>
        <h1 class="pt-8 mb-2">VueRooms</h1>
        <div id="nav" class="pb-4">
          <router-link to="/">Rooms</router-link> |
          <router-link to="/description">Description</router-link>
        </div>
      </header>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  } #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }

  #nav {
    a {
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  header {
    height: auto;
    background-color: #2c3e50;
    color: white;
    width: 100vw;
  }
</style>

<script>
  export default {
    name: "App",
  };
</script>
