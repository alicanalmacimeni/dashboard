import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from "highcharts-vue";

import Highcharts from 'highcharts'
import HighchartsNoData from 'highcharts/modules/no-data-to-display';


import highchartsOptions from '../public/js/highcharts-options'

Highcharts.setOptions(highchartsOptions)
HighchartsNoData(Highcharts);


Vue.use(HighchartsVue);


// import JSONView from 'vue-json-component';
// Vue.use(JSONView);


// import Highcharts from 'highcharts'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
