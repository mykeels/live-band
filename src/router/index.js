import Vue from 'vue'
import Router from 'vue-router'
import SyncedDrumKit from '@/components/SyncedDrumKit'
import Piano from '@/components/Piano'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: SyncedDrumKit
    },
    {
      path: '/drums',
      name: 'drums',
      component: SyncedDrumKit
    },
    {
      path: '/piano',
      name: 'piano',
      component: Piano
    }
  ]
})
