<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1>{{ $route.params.title }}</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8">
          <div id="meet"></div>
        </v-col>
      </v-row>
      <p class="mt-4 text--disabled">
        Because we're using the free Jitsi-API, you might see ads after ending the call.
      </p>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "Room",
    metaInfo: {
      title: "Meeting",
    },
    mounted() {
      const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;
      const domain = "meet.jit.si";
      const options = {
        roomName: this.$route.params.id,
        width: "100%",
        height: "100%",
        parentNode: document.querySelector("#meet"),
      };
      const api = new JitsiMeetExternalAPI(domain, options);
      console.log(api);
    },
    components: {},
    methods: {},

    data: () => ({}),
  };
</script>

<style>
  #meet {
    height: 50vh;
    min-height: 200px;
    width: 100%;
  }
</style>
