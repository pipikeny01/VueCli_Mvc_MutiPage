import Vue from 'vue'
//Vue.config.productionTip = false

Vue.component('users-grid', require('../../components/UsersGrid.vue').default);

window.Vue = Vue;
