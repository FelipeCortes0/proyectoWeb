import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
//import './plugins/vuetify'
//import { store } from './store'
//import router from './router'
//import axios from 'axios'

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);
import App from '../imports/ui/App'
//Vue.config.productionTip = false
//axios.defaults.baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4c9517a8&page=1&type=movie&Content-Type=application/json'
//importamos nuestra base de datos desde el lado del cliente
import { Peliculas } from '../imports/api/peliculas';
Meteor.startup(  () =>{
    new Vue ({
        render: h=> h(App)
//        store,
//        router
    }).$mount('app');

});



console.log("Este es el main del cliente");