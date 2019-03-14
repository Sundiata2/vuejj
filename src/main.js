import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Vuetify from 'vuetify';
import VueYoutube from 'vue-youtube';
import routes from './routes';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'md'
});
Vue.use(VueYoutube);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
