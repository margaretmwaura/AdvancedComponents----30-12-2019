<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell medium-3 large-3 small-3 ">

            </div>
            <div class="cell medium-9 large-9 small-9" id="dynamic">

                <keep-alive>
                    <component v-bind:is="component" >
                    </component>
                </keep-alive>
                <button v-on:click="toggle">{{buttonmsg}}</button>
            </div>
        </div>

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
                buttonmsg : "Next",
            }
        },
        methods: {
            toggle(){
                if (this.component === testtwo) {
                    this.component = testone;
                    this.buttonmsg = "Next"
                } else {
                    this.component = testtwo;
                    this.buttonmsg = "Previous"
                }
            }
        }
    }
</script>
<style lang="scss">

    button
    {
        background-color: indianred;
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>
