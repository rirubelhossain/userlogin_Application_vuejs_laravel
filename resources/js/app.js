import Home from "./components/Home";
import VueRouter from 'vue-router';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import App from "./components/App";

window.Vue = require('vue').default;
window.axios = require('axios');
window.axios.defaults.headers.common = {
    'Authorization': `bearer ${localStorage._token}`,
    'Accept': 'application/json'
}

const router = new VueRouter({
    mode: 'history',
    routes: [{
        name: 'home',
        path: '/',
        component: Home,
    }, {
        name: 'login',
        path: '/login',
        component: Login,
    }, {
        name: 'register',
        path: '/register',
        component: Register,
    }, {
        name: 'profile',
        path: '/profile',
        component: Profile,
    },
    ]
});

Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
