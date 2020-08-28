import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from "vue-axios"

import iView from 'iview'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.mooc.cc'

Vue.use(VueAxios, axios)
Vue.use(iView)

new Vue({
    render: h => h(App),
}).$mount('#app')
