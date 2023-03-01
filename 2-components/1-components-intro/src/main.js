import { createApp } from 'vue';
import App from './App.vue';
import Comopnent1 from './components/Component-1-global-component.vue';

const app = createApp(App);
app.component('global-component',Comopnent1);
app.mount('#app');
