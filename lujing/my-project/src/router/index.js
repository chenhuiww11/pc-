import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import gushiji from '@/components/gushiji'
import fengwuzhi from '@/components/fengwuzhi'
import allfwz from '@/components/allfwz'
import allrwz from '@/components/allrwz'
import renwuzhi from '@/components/renwuzhi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/gushiji',
      name: 'gushiji',
      component: gushiji
    },
    {
      path: '/fengwuzhi/:page',
      name: 'fengwuzhi',
      component: fengwuzhi
    },
     {
      path: '/renwuzhi/:page',
      name: 'renwuzhi',
      component: renwuzhi
    },
     {
      path: '/fengwuzhi',
      name: 'allfwz',
      component: allfwz
    },
      {
      path: '/renwuzhi',
      name: 'allrwz',
      component: allrwz
    },
  ]
})
