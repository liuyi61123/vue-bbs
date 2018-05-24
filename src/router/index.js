import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },
  // 其他未配置的路由都跳转到首页
  {
    path: '*',
    // 重定向
    redirect: '/'
  }

]

const router = new Router({
  mode: 'history',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth

  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else {
    next()
  }
})

export default router
