<template>
    <div id="st">
        <h1></h1>
        <p>This is a component that will be used for students data</p>
        <p>All the students will be here regardless of their ids</p>
        <p>This is the is in te route {{$route.params.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "Student",
    }
</script>

<style scoped>

</style>
