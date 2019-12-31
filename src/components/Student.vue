<template>
    <div class="grid-frame">
        <div id="banner">
            <h4>About us</h4>
        </div>

        <div class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell medium-1 large-1 small-1">

                </div>
                <div class="cell medium-10 large-10 small-10" id="content">

                    <p>Student Name :  {{$route.params.name}}</p>
                    <p>Our vision</p>
                    <p>The Nova Pioneer vision is to transform the lives and career paths of our students and equip them for success in the 21st century.
                        Our graduates’ exceptional experiences in our schools and their trajectories
                        beyond will enable them to lead change in Africa and around the globe.</p>
                    <p>Our Misions</p>
                    <p>We are developing generations of innovators and leaders who will shape the African Century.</p>
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
        name: "Student",
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

</style>
