import Vue from 'vue'
import Router from 'vue-router'
import Cities from '@/components/Cities'
import Reports from '@/components/Reports'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/cities'
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
    {
      path: '/cities/:name',
      name: 'Reports',
      component: Reports
    }
  ]
})
