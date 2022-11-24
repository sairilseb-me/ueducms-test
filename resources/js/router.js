import Vue from 'vue';
import VueRouter from 'vue-router';
import CMSLogin from './components/views/cms/Login.vue';
import Register from './components/views/cms/Register.vue';
import Home from './components/views/cms/Home.vue';
import PageControl from './components/views/cms/admin/PageControl.vue';

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
    },
    {
        path: '/cms',
        component: Home,
        name: 'cms-home'
    },
    {
        path: '/cms/pages',
        component: PageControl,
        name: 'pages'
    }

]

export const router = new VueRouter({
    mode: 'history',
    routes,
});