import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "../views/404.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cookies from "js-cookie";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: "/client/:id",
    name: "Client",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Client.vue")
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get("token");
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});

export default router;
