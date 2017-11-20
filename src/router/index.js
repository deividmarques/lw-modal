import Vue from 'vue'
import Router from 'vue-router'
import DocModal from '@/doc/DocModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DocModal',
      component: DocModal
    }
  ]
})
