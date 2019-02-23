import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { DefaultConnectionService } from 'yuya.ts.odata-client';

Vue.config.productionTip = false;
DefaultConnectionService.config.baseUrl = 'https://services.odata.org/';
DefaultConnectionService.config.odataEndpoint = 'TripPinRESTierService';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
