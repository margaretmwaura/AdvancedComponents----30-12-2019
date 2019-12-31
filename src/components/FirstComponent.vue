<template>
    <div >
                <p>Your name for record purposes: {{myname}}</p>
                <input v-model="myname" value="Name">
                <p>Please select when you want to take the exam</p>
                <li v-for="item in navdata" :key="item.id" @click="updateSelected(item)">
                    {{ item.name}}
                </li>

                <br>
                <p>{{selectedPlace}}</p>
                <p v-show="career">Welcome to choosing a career path for you </p>


    </div>
</template>

<script>
    export default {
        name: "FirstComponent",
        data (){
            return {
                selectedPlace : "none at the moment",
                career : false,
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
        },
        updated()
        {
              this.$notify({
                  group: 'foo',
                  title: 'Profile Update',
                  text: 'Your data has been updated'
              });
              this.career = false;
        },
        created()
        {
            this.career = true;
        },
        beforeDestroy() {
            this.career = false;
        }
    }
</script>

<style lang="scss">
p{
    font-weight: bold;
}
    li{
        margin: 0px;
        padding: 0px;

    }

</style>
