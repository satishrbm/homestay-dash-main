import { createRouter, createWebHistory } from 'vue-router';
// import PageNotFound from './pages/404.vue';
const Home = () => import('./pages/Home.vue');
const Login = () => import('./pages/Login.vue');
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '',
            component: Home,
            name: 'home',
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
        },
        
    ]
});

console.log('Router initialized:', router);

export default router