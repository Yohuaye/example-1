import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User/User.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/User/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: () => import('@/views/Login/ForgetPassword.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Login/Register.vue')
  },
  {
    path: '/groupRegister',
    name: 'groupRegister',
    component: () => import('@/views/Login/GroupRegister.vue')
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: () => import('@/views/Dynamic/Dynamic.vue')
  },
  {
    path: '/dynamicDetail',
    name: 'dynamicDetail',
    component: () => import('@/views/Dynamic/DynamicDetail.vue'),
  },
  {
    path: '/regionass',
    name: 'regionass',
    component: () => import('@/views/Type/Regionass.vue')
  },
  {
    path: '/typeass',
    name: 'typeass',
    component: () => import('@/views/Type/Typeass.vue')
  },
  {
    path: '/vol',
    name: 'vol',
    component: () => import('@/views/Vol/Vol.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/Product/Products.vue')
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: () => import('@/views/Product/ProductDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
