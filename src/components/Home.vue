<template>
    <div id="one">
        <p >{{subcomponent}}</p>
        <br>
        <p v-once>{{name}}</p>
        <input v-model="name">
        <p>Currently on working progress</p>
        <br>
        <p>Will have more</p>
        <button @click="redirect">click me</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            redirect: function ()
            {
                this.$router.push({ name: 'student', params: { name: 'Maggie' } })
            }
        },
        data (){
            return {
             subcomponent : this.$root.display,
                name : 'maggie'
            }
        },
    }
</script>

<style scoped>

</style>
