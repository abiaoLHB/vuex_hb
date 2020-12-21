import Vue from 'vue'
import Router from 'vue-router'
import nameView from '@/components/nameView/nameView'
import Foo from '@/components/Foo/Foo'
import Bar from '@/components/Bar/Bar'
import Baz from '@/components/Baz/Baz'

Vue.use(Router)
let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/index/index')
    },
    {
      path: '/second',
      name: "second",
      component: () => import('@/components/second/second'),
      // redirect:"/user_index"//重定向路由
      // redirect:{name:'user_index'}//重定向路由-命名路由
      // redirect:to=>{
      //   console.log("second路由重定向函数")
      //   console.log(to)
      //   return './user_index'
      //   console.log("second路由重定向函数")
      // }

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
      name: "user",
      component: () => import('@/components/user/user'),

    },
    {
      path: '/namerouter',
      name: "namerouter", // 加上name，就叫命名路由了
      component: () => import('@/components/namerouter/namerouter'),

    },
    {
      path: '/nameView',
      name: "nameView",
      components: {
        default:nameView,
        one: Bar,
        two: Baz,
        three: Foo
      }
    },
    // 通配符路由应该放在最后
    {
      path: '*',
      name: "nofind",
      component: () => import('@/components/nofind/nofind')
    },
  ]
})

router.beforeEach((to,from,next)=>{
  console.log("全局前置守卫")
  console.log(to)
  console.log(from)
  console.log("全局前置守卫")
  next()
})

export default router