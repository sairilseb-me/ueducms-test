import './bootstrap';
import Vue from 'vue';
import App from './components/App.vue';
import {router} from './router.js';
import {vuetify} from './vuetify';

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
})