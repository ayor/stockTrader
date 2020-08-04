//import statements starts

import Vue from 'vue'
import VueX from 'vuex'
import Prices from './modules/Prices'
import Stock from './modules/stock'
import * as getters from './getters' 
import * as mutations from './mutations' 
import * as actions from './actions' 
//import statement ends

//use vuex
Vue.use(VueX);



export const store = new VueX.Store({
    state:{
        funds: 10.00,
        insufficientQty: false
    },
    getters,
    mutations,
    actions,
    modules:{
        Prices,
        Stock
     }
})
