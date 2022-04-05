import { createRouter, createWebHashHistory } from 'vue-router'
import dashboardLayout from '../Layout/dashboardLayout.vue'
import users from '../views/users.vue'
import groups from '../views/groups.vue'
import transactions from '../views/transactions.vue'

const routes = [{
        path: '/',
        name: 'dashboard',
        redirect: "/dashboard/users",
        component: dashboardLayout,
        children: [{
                path: '/dashboard/users',
                name: 'users',
                component: users
            },
            {
                path: '/dashboard/groups',
                name: 'groups',
                component: groups
            },
            {
                path: '/dashboard/transactions',
                name: 'transactions',
                component: transactions
            },
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router