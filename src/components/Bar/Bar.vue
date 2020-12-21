<template>
    <div class="wrapbar">
        Bar
    </div>
</template>

<script>
    export default {
        name: 'Bar',
        data() {
            return {
                name: 'Bar'
            }
        },
        created() {
            console.log('name--Bar')
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