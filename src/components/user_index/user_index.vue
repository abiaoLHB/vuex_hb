<!-- 动态路由匹配 : 几个路由都渲染这个组件 -->

<template>
    <div class="wrap">
        <div>
            user组件:{{name}}
        </div>
        <router-link to="/user_index/user_bar">user_bar</router-link>
        <router-link to="/user_index/user_foo">user_foo</router-link>
        <router-link to="/user_index/user_too">user_too</router-link>
        <p>子路由</p>
        <router-view></router-view>



    </div>
</template>
<script>
    export default {
        name: 'user',
        data() {
            return {
                name: 'zhangsan'
            }
        },
        // 没起作用
        watch: {
            $route(to, from) {
                console.log("路由变化")
                console.log(to)
                console.log(from)
                console.log("路由变化")
            }
        },
        created() {
            console.log("路由参数")
            console.log(this.$route.params)
            console.log(this.$route.params.id)
            console.log("路由参数")
        },
        beforeEnter(){
            console.log('user_index---->beforeEnter')
        },

        beforeRouteEnter(to, from, next) {
            console.log("user_index---->beforeEnter----")
            console.log(to)
            console.log(from)
            console.log("user_index---->beforeEnter----")
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate--')
            console.log(to)
            console.log(from)
            console.log('beforeRouteUpdate--')
            next()
        },
        mounted() {

        },
        methods: {

        },
    }

</script>
<style scope>
</style>