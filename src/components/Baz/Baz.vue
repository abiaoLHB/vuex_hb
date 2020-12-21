<template>
    <div class="wrapbaz">
        baz
    </div>
</template>

<script>
    export default {
        name: 'Baz',
        data() {
            return {
                name: 'Baz'
            }
        },
        created() {
            console.log('name--Baz')
        },
        mounted() {
            console.log('name--mounted')

        },
        methods: {

        },
    }

</script>

<style scoped>
  
</style>