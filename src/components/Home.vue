<template>
    <div class="grid-frame">
        <div id="banner">
            <h4>Welcome to Home Page</h4>
        </div>

        <div class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell medium-1 large-1 small-1">

                </div>
                <div class="cell medium-5 large-5 small-5" id="content">
                    <p>A school is an educational institution designed to provide learning spaces and learning
                        environments for the teaching of students (or "pupils") under the direction of teachers.
                        Most countries have systems of formal education, which is commonly compulsory.[2] In these systems,
                        students progress through a series of schools. The names for these schools vary by country (discussed in the
                        Regional section below) but generally include primary school for young children and secondary school for teenagers who have completed primary education. An institution where higher
                        education is taught, is commonly called a university college
                        or university, but these higher education institutions are usually not compulsory.
                        In addition to these core schools, students in a given country may also attend schools
                        before and after primary (Elementary in the US) and secondary (Middle school in the US) education.
                        Kindergarten or preschool provide some schooling to very young children (typically ages 3–5).</p>
                    <br>
                    <button @click="redirect">Go to Students data</button>
              </div>
                <div class="cell medium-5 large-5 small-5" id="more">
                   <p>Enter your name for record purposes : You can only do it once , get it right</p>
                    <p >{{subcomponent}}</p>
                    <p v-once>{{name}}</p>
                    <input v-model="name">
                </div>
                <div class="cell medium-1 large-1 small-1">

                </div>
            </div>
        </div>

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
        p{
            font-weight: bold;
        }
    }

</style>
