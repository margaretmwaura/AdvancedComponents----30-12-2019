<template>
    <div>
        <keep-alive>
            <component v-bind:is="component" >
            </component>
        </keep-alive>
        <button v-on:click="toggle">Toggle</button>
    </div>
</template>

<script>
    import testone from './FirstComponent';
    import testtwo from './SecondComponent.vue';
    export default {
        name: 'app',
        components: {
            testone,testtwo
        },
        data (){
            return {
                component:"testone",
            }
        },
        methods: {
            toggle(){
                if (this.component === testtwo) {
                    this.component = testone;
                } else {
                    this.component = testtwo;
                }
            }
        }
    }
</script>
<style scoped>
</style>
