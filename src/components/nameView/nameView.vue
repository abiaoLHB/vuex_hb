<template>
    <div class="wrap">
        <div>nameView</div>
        <router-view class="view nameView" >10</router-view>
        <router-view class="view one" name="one">1</router-view>
        <router-view class="view two" name="two">2</router-view>
        <router-view class="view three" name="three">3</router-view>
    </div>
</template>

<script>
    export default {
        name: 'nameView',
        data() {
            return {
                name: 'nameView'
            }
        },
        created() {
            console.log('name--nameView')
            console.log(this.$route.params)
            console.log(JSON.stringify(this.$route.params))
            console.log('name--nameView')
        },
        mounted() {
            console.log('name--mounted')

        },
        methods: {

        },
    }

</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }




</style>