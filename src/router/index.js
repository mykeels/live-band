import Vue from 'vue'
import Router from 'vue-router'
import Band from '@/components/Band'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Band
    }
  ]
})
