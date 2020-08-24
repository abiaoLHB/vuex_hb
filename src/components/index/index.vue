<template>
  <div class="wrap">
    <div>{{msg}}</div>
    <div @click="add">加1</div>
    <div>{{count}}</div>
    <div @click="noadd">减1</div>
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
      }
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