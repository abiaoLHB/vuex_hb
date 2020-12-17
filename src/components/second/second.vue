<template>
    <div class="wrap">
        <div>{{msg}}</div>
        <p></p>

        <a v-bind:href="url">a-v-bind</a>
        <a :href="url">:href-简写</a>
        <a :[href]="url">动态参数</a>

        <div v-on:click="soSomthing">v-on:完整写法</div>
        <div @click="soSomthing1">v-on:简写</div>
        <div @[event]="soSomthing2">v-on:动态参数</div>

        <div>正向字符串：{{aMessage}}</div>
        <div>反向字符串：{{reversedMessage}}</div>
        <div>时间：{{now}}</div>
        <div>watch : {{fullName}}</div>
        <div>计算 : {{fullName1}}</div>
    </div>
</template>

<script>
    export default {
        name: 'second',
        data() {
            return {
                msg: 'secondPage',
                url: 'https://www.baidu.com',
                href: "href",
                event: 'click',
                aMessage: "Goodbye!",
                firstName:'Foo',
                lastName:'Bar',
                fullName:'Foo Bar',
            }
        },
        computed: {
            reversedMessage: function () {
                return this.aMessage.split('').reverse('').join('')
            },
            now: function () {
                return Date.now()
            },
            fullName1:function(){
                return this.firstName + ' ' + this.lastName
            }
        },
        watch:{
            firstName:function(val){
                this.fullName = val + ' ' + this.lastName
            },
            lastName:function(val){
                this.fullName = this.firstName + ' ' + val
            }
        },
        created() {
            console.log("second--page1")
            console.log(this.$route)
            console.log(this.$route.params)
            console.log("second--page1")

        },
        mounted() {
            console.log("second--page2")
            console.log(this)
            console.log("second--page2")
            let tiemr1 = setTimeout(() => {
                clearTimeout(tiemr1)
                console.log("dom还没更新1111")
                this.msg = "im - message"
                this.$nextTick(function () {
                    console.log("dom更新了222")
                })
            }, 2000)


        },
        methods: {
            soSomthing() {
                console.log('soSomthing0')
            },
            soSomthing1() {
                console.log('soSomthing1')
            },
            soSomthing2() {
                console.log('soSomthing2')
            }
        },
    }
</script>

<style scoped>
    .wrap {
        width: 100%;
        height: 100vh;
    }
</style>