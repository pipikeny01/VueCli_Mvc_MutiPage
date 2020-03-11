import Vue from 'vue'
//Vue.config.productionTip = false

Vue.component('my-first-view', require('./MyFirstView.vue').default);

window.Vue = Vue;
