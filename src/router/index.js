import Vue from 'vue'
import Router from 'vue-router'
import SyncedDrumKit from '@/components/SyncedDrumKit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: SyncedDrumKit
    }
  ]
})
