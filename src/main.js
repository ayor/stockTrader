//******************Imports should be done here *************************
//1
import Vue from 'vue'
import App from './App.vue'
import VueX from'vuex'
//import vue router
import VueRouter from 'vue-router'
//import the routes
import {routes} from './routes'
//import store for better state management with vuex
import {store} from './store/store'

//************************imports end here********************

//2

/****************Vue.use code here*****************/
//1*use the vueRouter
Vue.use(VueRouter);

//2*use vueX 
Vue.use(VueX)
/****************Vue Use ends here ****************/

//B * register router here
//create a router and set the url mode to history (we can also have hash mode which is the default)
//register the routes in the vue router
const router = new VueRouter({
  routes,
  mode: 'history'
})


//use router and store in the vue instance

//this is the main vue instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
