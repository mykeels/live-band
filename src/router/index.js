import Vue from 'vue'
import Router from 'vue-router'
import DrumKit from '@/components/DrumKit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: DrumKit
    }
  ]
})
