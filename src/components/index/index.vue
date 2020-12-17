<template>
  <div class="wrap">
    <div>{{msg}}</div>
    <div @click="add">加1</div>
    <div>{{count}}</div>
    <div @click="noadd">减1</div>

    <div>{{name}}</div>
    <div>{{doneName}}</div>
    <div @click="goNext">下一页</div>

    <div v-if="isShow">v-show</div>
    <div @click="toggleShow">togglseShow</div>
    <div @click="goUser">去user-zhangsan</div>
    <div @click="goUser2">去user-lisi</div>
    <div @click="notFond">匹配不到</div>

    <router-link to="user_index">user_index</router-link>

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



    computed: {
      count() {
        return this.$store.state.count
      },
      name() {
        return this.$store.state.name
      },
      doneName() {
        return this.$store.getters.doneName
      }
    },
    created() {
      console.log("index-page")
    },
    mounted() {
      let tiemr = setTimeout(() => {
        clearTimeout(tiemr)
        // 更改name
        this.$store.commit('changeName', 'luohongbiao')
      }, 3000)
    },
    methods: {
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
      goNext() {
        this.$router.push({
          path: 'second'
        })
      },
      goUser(){
        this.$router.push({
          path:'user/zhangData'
        })
      },
      goUser2(){
        this.$router.push({
          path:'user/lisi'
        })
      },
      notFond(){
        this.$router.push({
          path:'bababbaba' //匹配不到会进入404
        })
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