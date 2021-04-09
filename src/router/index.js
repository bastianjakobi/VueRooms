import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/room/:id",
    name: "room",
    component: Room,
    props: true,
  },
  {
    path: "/description",
    name: "description",
    component: About,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
