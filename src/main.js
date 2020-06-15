import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrapCss from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
window.$ = window.bootstrapcss = bootstrapCss
import bootstrapJs from "../node_modules/bootstrap/dist/js/bootstrap.min.js";
window.$ = window.bootstrapjs = bootstrapJs
import jquery from "jquery";
window.$ = window.jQuery = jquery
import popper from "popper.js"
window.$ = window.Popper = popper
import axios from 'axios'
window.axios = axios

//import adminLte from 'admin-lte';
//window.$ = window.adminlte = adminLte;

var token;
window.token = localStorage.getItem('AToken');
axios.defaults.baseURL = 'http://localhost/CarShop-master/public/api';
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

import { Form, HasError, AlertError } from 'vform'
window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import iziTostJs from '../node_modules/izitoast/dist/js/iziToast.js' 
import iziTostCss from '../node_modules/izitoast/dist/css/iziToast.min.css'
window.iziToast = iziTostJs;  
window.iziToast = iziTostCss;  

Vue.component('pagination', require('laravel-vue-pagination'));




Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
