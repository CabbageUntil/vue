import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Layout from '@/page/layout'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Layout',
        component: Layout
    }, {
        path: '/Page1',
        name: 'Page1',
        component: Page1
    }, {
        path: '/Page2',
        name: 'Page2',
        component: Page2
    }, {
        path: '/Page3',
        name: 'Page3',
        component: Page3
    }]
})
export default router;