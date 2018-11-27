import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: require('@/components/principal').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
