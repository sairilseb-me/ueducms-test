import Vue from 'vue';
import VueRouter from 'vue-router';
import CMSLogin from './components/views/cms/Login.vue';
import Register from './components/views/cms/Register.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/cms/login',
        component: CMSLogin,
        name: 'cms-login'
    },
    {
        path: '/cms/register',
        component: Register,
        name: 'cms-register'
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
});