<template>

    <div class="grid-frame">
        <div id="banner">
            <h4>About us</h4>
        </div>

        <div class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell medium-1 large-1 small-1">

                </div>
                <div class="cell medium-5 large-5 small-5" id="content">
                  <p>We are a network of schools developing generations of innovators and leaders
                      who will shape the African Century. We launched our first school in South Africa in 2014.
                      We have since expanded within South Africa, and to Kenya – with our first Kenyan school launching in 2015.</p>
                </div>
                <div class="cell medium-5 large-5 small-5" id="more">
                    <p>
                        In all of our schools, we bring in and train top educators to deliver educational
                        excellence in an environment that nurtures our students to uncover their potential and blaze trails
                        in the world beyond our school walls.
                        Nova Pioneer students develop into life-long learners who can uncover their talents and potential.
                    </p>
                </div>
                <div class="cell medium-1 large-1 small-1">

                </div>
            </div>
        </div>

        <div class="grid-container" id="inside">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss">
    #banner{
        height: 300px;
        background-color: indigo;
        text-align: center;

        h4{
            padding-top: 150px;
        }
    }
    #content{
        margin-top: 20px;
        p{
            font-weight: bold;
        }

        button
        {
            background-color: indianred;
            color: white;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }
    #more{
        margin-top: 20px;
        p{
            font-weight: bold;
        }
    }
    #inside{
        height: 800px;
    }

</style>
