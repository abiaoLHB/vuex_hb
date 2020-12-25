<template>
  <div class="wrap">
    <div>{{msg}}</div>
    <div @click="add">加1</div>
    <div>{{count}}</div>
    <div>{{name}}</div>
    <div @click="changeAddress">地址：{{newAddress}}</div>
    <div @click="noadd">减1</div>

    <div>{{name}}</div>
    <br>
    <div>{{doneListaa}}6666</div>
    <br>
    <br>
    <div>是否及格:{{getSix}}</div>
    <br>
    <!-- <div>{{doneName}}</div> -->
    <div @click="goNext">下一页</div>

    <div v-if="isShow">v-show</div>
    <div @click="toggleShow">togglseShow</div>
    <div @click="goUser">去user-zhangsan</div>
    <div @click="goUser2">去user-lisi</div>
    <div @click="notFond">匹配不到</div>
    <div @click="codeingRouter">编程式导航</div>
    <router-link to="user_index">user_index</router-link>

    <div @click="goName">去命名路由</div>
    <br>
    <router-link to="nameView">命名视图</router-link>
    <br>

    <ul>
      <li class="li1" :class="{'orange':isOrange}">1</li>
      <li class="li2" :class="[redClass,blueClass]">2</li>
      <li class="li3">3</li>
      <li class="li4">4</li>
      <li class="li5">5</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow: true,
        isOrange: true,
        redClass: "redClass",
        blueClass: "blueClass",
      }
    },

    // v-show是css切换，v-if是完整的销毁和重新创建
    // 频繁切换用v-show，运行较少改变时用v-if
    // v-if是条件渲染，当false的时候不会渲染

    // 绑定class的数组用法

    // computed: mapState({
    //   count: state => state.count,
    //   newAddress: 'address',//传字符串，等同于 state=>state.address
    //   name: state => state.name,
    //   doneListaa: state => state.getters.doneList,
    //   // doneName:state =>state.getters.doneName
    // }),
    computed: {
      count() {
        return this.$store.state.count
      },
      newAddress() {
        return this.$store.state.address
      },
      name() {
        return this.$store.state.name
      },
      doneName() {
        return this.$store.getters.doneName
      },
      doneListaa() {
        return this.$store.getters.doneList
      },
      getSix() {
        return this.$store.getters.getSix(60)
      },

    },
    beforeCreate() {
      console.log('beforeCreate---')
      console.log(this.msg)
      console.log('beforeCreate+++')
    },
    created() {
      console.log("index-router")
      console.log(this.$router)
      console.log(this.$router.app)
      console.log(this.$router.mode)
      console.log(this.$router.currentRoute)
      console.log("index-router")
      console.log('created---')
      console.log(this.msg)
      console.log('created+++')

      setTimeout(() => {
          // this.msg = "更新"
      }, 3000);
    },
    beforeMount() {
      console.log('beforeMount---')
      console.log(this.msg)
      console.log('beforeMount+++')

    },
    mounted() {
      console.log('mounted---')
      console.log(this.msg)
      console.log('mounted+++')
      let tiemr = setTimeout(() => {
        clearTimeout(tiemr)
        // 更改name
        this.$store.commit('changeName', 'luohongbiao')
      }, 3000)
    },
    beforeUpdate() {
      console.log('更新之前-----------')
    },
    updated(e) {
      console.log("更新------------------")
    },

    methods: {
      beforeRouteEnter(to, from, next) {
        console.log("index---->beforeEnter----")
        console.log(to)
        console.log(from)
        console.log("index---->beforeEnter----")
        next()
      },
      toggleShow() {
        this.isShow = !this.isShow
      },
      add() {
        console.log("add")
        this.$store.commit('increment')
      },
      noadd() {
        console.log('noadd')
        this.$store.commit('decrement')
      },
      changeAddress() {
        this.$store.commit('changeAddress', parseInt(Math.random() * 10))
      },
      goNext() {
        this.$router.push({
          path: 'second'
        })
      },
      goUser() {
        this.$router.push({
          path: 'user/zhangData'
        })
      },
      goUser2() {
        this.$router.push({
          path: 'user/lisi'
        })
      },
      notFond() {
        this.$router.push({
          path: 'bababbaba' //匹配不到会进入404
        })
      },
      codeingRouter() {
        // 编程式导航：参数可以是一个字符串路径，或者一个描述地址的对象

        // 字符串 路由
        // this.$router.push('second')

        // 对象 路由
        // this.$router.push({
        //   path:'second'
        // })

        // 命名路由
        this.$router.push({
          name: 'second',
          params: {
            address: 'Beiing'
          }
        })

        // 带查询参数
        // this.$router.push({
        //   path:'second',
        //   query:{
        //     plan:'private'
        //   }
        // })

      },

      goName() {
        this.$router.push({
          name: 'namerouter',
          params: {
            name: 'luohongbiao',
            age: 30,
            address: 'beijing'
          }
        })
      },
      beforeRouteLeave(to, from, next) {
        console.log("Do you really want to leave? you have unsaved changes")
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
          next()
        } else {
          next(false)
        }
      }
    },
  }
</script>

<style scoped>
  .wrap {
    background: pink;
  }

  .li1 {
    font-size: 24px;
  }

  .orange {
    background-color: orange;
  }

  .redClass {
    background-color: red;
    opacity: 0.5;
  }

  .blueClass {
    color: blue;
  }
</style>