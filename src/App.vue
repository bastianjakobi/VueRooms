<template>
  <v-app id="app">
    <header>
      <h1 class="pt-8 mb-2">vRooms</h1>
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
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    min-height: 100vh;
  }

  #nav {
    a {
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: #00ff8c;
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
    metaInfo: {
      title: "Home",
      titleTemplate: "%s | vRooms",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
  };
</script>
