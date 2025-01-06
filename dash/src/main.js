import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import './assets/app.css'; // Import Tailwind CSS
// import VueFullscreen from 'vue-fullscreen';

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VueFullscreen);

app.mount('#app');
