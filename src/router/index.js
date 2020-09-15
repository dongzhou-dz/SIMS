import Vue from 'vue'
import VueRouter from 'vue-router'

const UserLogin = () => import(/* webpackChunkName: 'userlogin' */ "@/views/UserLogin/UserLogin")
const UserList = () => import(/* webpackChunkName: 'userlist' */ "@/views/UserList/UserList")


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
