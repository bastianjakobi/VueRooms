import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
function lazyLoad(view) {
  return()=>import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/room/:id",
    name: "room",
    component: lazyLoad("Room"),
    props: true,
  },
  {
    path: "/description",
    name: "description",
    component: lazyLoad("About"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
