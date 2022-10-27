import './bootstrap';
import Vue from 'vue';
import App from './components/App.vue';
import {router} from './router.js';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})