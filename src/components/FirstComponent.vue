<template>
    <div>
        <p>This is the first component</p>
        <p>I am so happy about it </p>
        <p>Your name : {{myname}}</p>
        <input v-model="myname" value="Name">
        <p>Please select when you want to take the exam</p>
        <li v-for="item in navdata" :key="item.id" @click="updateSelected(item)">
            {{ item.name}}
        </li>
        <p>{{selectedPlace}}</p>
    </div>
</template>

<script>
    export default {
        name: "FirstComponent",
        data (){
            return {
                selectedPlace : "none at the moment",
                myname: " ",
                navdata : [
                    {name: 'Taking the Exam in January'},
                    {name: 'Taking the Exam in February'},
                    {name: 'Taking the Exam in March'},
                    {name: 'Taking the Examm in April'},
                    {name: 'Taking the Exam in May'},
                ],
            }
        },
        methods: {
            updateSelected (selectedItem) {
                this.selectedPlace = selectedItem.name;
                // this.showPlaces = true;
            }
        }
    }
</script>

<style scoped>

</style>
