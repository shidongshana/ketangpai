import Vue from 'vue'
import VueRouter from 'vue-router'
import Login   from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
     component: Login
  },
  {
   path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
