import { createApp } from 'vue'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

import App from './App.vue'

const app = createApp(App)

app.use(Vuesax);

app.mount('#app');