<template>
    <div class="wrap">
        {{name}}
    </div>
</template>

<script>
    export default {
        name: 'namerouter',
        data() {
            return {
                name: 'pppp'
            }
        },
        created() {
            console.log('name--created')
            console.log(this.$route.params)
            console.log(JSON.stringify(this.$route.params))
            console.log('name--created')
        },
        mounted() {
            console.log('name--mounted')

        },
        methods: {

        },
    }

</script>