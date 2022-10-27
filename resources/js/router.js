import Vue from 'vue';
import VueRouter from 'vue-router';
import CMSLogin from './components/views/cms/Login.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/cms/login',
        component: CMSLogin,
        name: 'cms-login'
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
});