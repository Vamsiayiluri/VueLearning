import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
