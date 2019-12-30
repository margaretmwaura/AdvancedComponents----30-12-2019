<template>
    <div>
        <p>The student name is Margaret</p>
        <p>The student is in class 5</p>
        <p>This student is very hardowrking</p>

    </div>

</template>

<script>
    export default {
        name: "StudentProfile",
        data (){
            return {
                navdata : [
                    {name: 'This is Maggie'},
                    {name: 'This is Judy'},
                    {name: 'This is Wanjiru'},
                    {name: 'This is Diana'},
                    {name: 'This is Lucy'},
                ],
            }
        },
    }
</script>

<style scoped>
div{
    color: indianred;
}
</style>
