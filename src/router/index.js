import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
   // Column
   {
    path: '/:user',
    name: 'Column',
    component: () => import('@/views/articles/Column'),
    children: [
      {
        path: '',
        name: 'Column',
        component: () => import('@/views/articles/List.vue')
      },
      {
        path: '/articles/:articleId/content',
        name: 'Content',
        component: () => import('@/views/articles/Content.vue')
      }
    ]
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
  //用户相关路由
  {
    path: '/users/1/edit',
    component: () => import('@/views/users/Edit.vue'),
    children: [
      {
        path: '',
        name: 'EditProfile',
        component: () => import('@/views/users/Profile.vue'),
        meta: { auth: true }
      },
      {
        path: '/users/1/edit_avatar',
        name: 'Avatar',
        component: () => import('@/views/users/Avatar.vue'),
        meta: { auth: true }
      },
      {
        path: '/users/1/edit_password',
        name: 'Password',
        component: () => import('@/views/users/Password.vue'),
        meta: { auth: true }
      }
    ]
  },
  //文章相关路由
  {
    path: '/articles/create',
    name: 'Create',
    component: () => import('@/views/articles/Create'),
    meta: { auth: true }
  },
  // 编辑文章
  {
    path: '/articles/:articleId/edit',
    name: 'Edit',
    component: () => import('@/views/articles/Create'),
    meta: { auth: true }
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
  linkExactActiveClass: 'active',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const app = router.app
  const store = app.$options.store
  const auth = store.state.auth
  // 获取目标页面路由参数里的 articleId
  const articleId = to.params.articleId

  app.$message.hide()

  if (
    (auth && to.path.indexOf('/auth/') !== -1) ||
    (!auth && to.meta.auth)||
    // 有 articleId 且不能找到与其对应的文章时，跳转到首页
    (articleId && !store.getters.getArticleById(articleId))
  ) {
    next('/')
  } else {
    next()
  }
})

// 注册全局后置钩子
router.afterEach((to, from) => {
  const app = router.app
  const store = app.$options.store
  // 获取目标页面路由参数里的 showMsg
  const showMsg = to.params.showMsg

  if (showMsg) {
    // showMsg 是一个字符时，使用它作为消息内容
    if (typeof showMsg === 'string') {
      // 显示消息提示
      app.$message.show(showMsg)
    } else {
      // 显示操作成功
      app.$message.show('操作成功')
    }
  }
})

export default router
