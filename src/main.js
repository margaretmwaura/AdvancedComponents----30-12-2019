import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
// Load the Vue router
Vue.use(VueRouter);

// Import components
// import Home from './components/Home.vue';
import About from './components/About.vue';
import filenotfound from './components/filenotfound.vue';
import Student from './components/Student.vue';
import StudentProfile from './components/StudentProfile.vue';
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/Home',
            // component:
            //     {
            //         Home : () => import('./components/Home')
            //     },

            component : () => import('./components/Home')
        },
        {
            path: '/About',
            component: About,
            children: [
                {
                    // UserProfile will be rendered inside Student's <router-view>
                    // when /user/:name/profile is matched
                    path: 'profile',
                    name:'StudentProfile',
                    component: StudentProfile
                },
                {
                    // UserProfile will be rendered inside Student's <router-view>
                    // when /user/:name/profile is matched
                    path: 'data',
                    name:'data',
                    component : () => import('./components/containerdynamic')
                },
            ]
        },
        {
            path: '/Student/:name',
            component: Student,
            name: 'student'

        },
        {
            // will match everything
            path: '*',
            component: filenotfound,
        }
    ],


});
new Vue({
    router,
    data (){
        return {
            display :"This is maggie she doing grerat",
            navdata : [
                {name: 'This is Maggie'},
                {name: 'This is Judy'},
                {name: 'This is Wanjiru'},
                {name: 'This is Diana'},
                {name: 'This is Lucy'},
            ],
        }
    },
    render: h => h(App),
}).$mount('#app')
