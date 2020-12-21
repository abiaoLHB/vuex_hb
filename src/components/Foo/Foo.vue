<template>
        <div class="wrapfoo">
            Foo
        </div>
    </template>

    <script>
        export default {
            name: 'Foo',
            data() {
                return {
                    name: 'Foo'
                }
            },
            created() {
                console.log('name--Foo')

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