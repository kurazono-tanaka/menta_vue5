import Vue from 'vue';
import App from './App.vue';

// ルーティングのために追加
import router from './router';
//Vuexのために追加
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router, // ルーティングのために追加
  store, //Vuexのために追加
  render: (h) => h(App),
}).$mount('#app');
