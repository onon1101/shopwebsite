import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeAbout from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import MemberView from '../views/MemberView.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/about',
    name: 'about',
    component: HomeAbout,

  },
  {
    path:'/Login',
    name: 'login',
    component:LoginView,
    meta: { Islogined: false },
  },
  {
    path:'/member',
    name: 'member',
    component:MemberView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  if(to.name == 'login'){
    if (!(to.meta.Islogined || !(cookies.get('LoggedIn')))) {
      // 此路由需要授权，请检查是否已登录
      // 如果没有，则重定向到登录页面
      return {
        path: '/member',
        // 保存我们所在的位置，以便以后再来
        query: { redirect: to.fullPath },
      }
    }
  } 

})

export default router
