import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
// import Second from '@/components/second/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/index/index')
    },
    {
      path: '/second',
      name: "Second",
      component: () => import('@/components/second/second')
    },
    {
      path: '/user_index',
      name: "user_index",
      component: () => import('@/components/user_index/user_index'),
      children: [
        {
          path: 'user_bar',
          name: 'user_bar',
          component: () => import('@/components/user_bar/user_bar'),
        },
        {
          path: 'user_foo',
          name: 'user_foo',
          component: () => import('@/components/user_foo/user_foo'),
        },
        {
          path: 'user_too',
          name: 'user_too',
          component: () => import('@/components/user_too/user_too'),
        }
      ]
    },
    {
      path: '/user/:id',
      name: "User",
      component: () => import('@/components/user/user'),

    },
    // 通配符路由应该放在最后
    {
      path: '*',
      name: "nofind",
      component: () => import('@/components/nofind/nofind')
    },
  ]
})
