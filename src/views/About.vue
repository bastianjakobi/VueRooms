<template>
  <v-app>
    <v-container>
      <h1>Description</h1>
      <p>
        vRooms is a simple room based video chat application made with Vue.js, Vuetify and the Jitsi
        IFrame API.
      </p>
      <p>
        You can either use one of the existing rooms or create your own one. Be aware that the
        application isn't connected to a database, so your created rooms won't be persisted after
        you close them.
      </p>
      <b> Have fun using vRooms! </b>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "About",
    metaInfo: {
      title: "Description",
    },
  };
</script>

<style></style>
