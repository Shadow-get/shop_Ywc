import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  const token = localStorage.getItem('token')
  // to 从哪来
  // from 到哪去
  // next 放行
  //  如果去登录放行 如果有token放行
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
