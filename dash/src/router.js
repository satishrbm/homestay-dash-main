import { createRouter, createWebHistory } from 'vue-router';
// import PageNotFound from './pages/404.vue';
const Home = () => import('./Pages/Home.vue');
const Login = () => import('./Pages/Login.vue');
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

export default router