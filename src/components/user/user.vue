<!-- 动态路由匹配 : 几个路由都渲染这个组件 -->

<template>
    <div class="wrap">
        <div>
            user组件:{{name}}
        </div>
        <router-link to="user_bar">/user/foo</router-link>
        <router-link to="user_foo">/user/foo/profile</router-link>
        <router-link to="user_too">/user/foo/posts</router-link>
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
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter----")
            console.log(to)
            console.log(from)
            console.log("beforeRouteEnter----")
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