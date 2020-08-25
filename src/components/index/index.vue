<template>
  <div class="wrap">
    <div>{{msg}}</div>
    <div @click="add">加1</div>
    <div>{{count}}</div>
    <div @click="noadd">减1</div>

    <div>{{name}}</div>
    <div>{{doneName}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      name(){
        return this.$store.state.name
      },
      doneName(){
        return this.$store.getters.doneName
      }
    },
    created() {

    },
    mounted() {
      let tiemr = setTimeout(()=>{
        clearTimeout(tiemr)
        // 更改name
        this.$store.commit('changeName','luohongbiao')
      },3000)
    },
    methods: {
      add() {
        console.log("add")
        this.$store.commit('increment')
      },
      noadd(){
        console.log('noadd')
        this.$store.commit('decrement')
      }
    },
  }
</script>

<style scoped>
</style>