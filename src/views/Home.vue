<template>
  <v-app class="home">
    <v-container>
      <h2 class="mb-2">Use one of our rooms</h2>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in listItems" :key="i" @click="route(item.id, item.text)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <h2 class="mt-14 mb-2">Or create your own</h2>
      <v-form>
        <v-text-field required label="Enter a channel name" v-model="roomName"></v-text-field>
        <v-btn color="success" @click="handleCreate()">Create room</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "Home",
    metaInfo: {
      title: "Home",
    },
    components: {},
    data: () => ({
      roomName: "",
      listItems: [
        {
          id: "VueRooms-Sports",
          text: "Sports",
          icon: "mdi-football",
        },
        {
          id: "VueRooms-Development",
          text: "Development",
          icon: "mdi-code-not-equal-variant",
        },
        {
          id: "VueRooms-Meet",
          text: "Meet friends",
          icon: "mdi-account-group",
        },
      ],
    }),
    methods: {
      route(id, title) {
        this.$router.push({ name: "room", params: { id: id, title: title } });
      },
      handleCreate() {
        let id = "VueRooms-" + this.roomName;
        let text = this.roomName;
        this.route(id, text);
      },
    },
  };
</script>
