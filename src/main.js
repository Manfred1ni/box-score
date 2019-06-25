import Vue from "vue";
import App from "./App.vue";
import "beautify-scrollbar/dist/index.css";
import "v2-table/dist/index.css";
import V2Table from "v2-table";

Vue.use(V2Table);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
