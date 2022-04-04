import { createRouter, createWebHashHistory } from 'vue-router'
import overview from '../views/overview.vue'
import dashboardLayout from '../Layout/dashboardLayout.vue'

const routes = [{
        path: '/',
        name: 'dashboard',
        redirect: "/dashboard/overview",
        component: dashboardLayout,
        children: [{
            path: '/dashboard/overview',
            name: 'overview',
            component: overview
        }]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router