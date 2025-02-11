// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
 
 
// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)
 
// 2.创建VueRouter对象
const routes = [
  {
    path: '/',
    component: () => import("../pages/IndexView.vue")
  },
  {
    path: '/news',
    component: () => import("../pages/NewView.vue")
  },
  {
    path: '/womenclothing',
    component: () => import("../pages/WomenclothingView.vue")
  },
  {
    path: '/contact',
    component: () => import("../pages/ContactView.vue")
  },
  {
    path: '/recommendation',
    component: () => import("../pages/RecommendationView.vue")
  },
  {
    path: '/login',
    component: () => import("../pages/LoginView.vue")
  },
  {
    path: '/register',
    component: () => import("../pages/RegisterView.vue")
  },
  {
    path: '/personal',
    component: () => import("../pages/PersonalInfo.vue")
  },
  {
    path: '/cart',
    component: () => import("../pages/CartView.vue")
  },
  {
    path: '/flashSale',
    component: () => import("../pages/FlashSale.vue")
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
 
// 3.将router对象传入到Vue实例
export default router