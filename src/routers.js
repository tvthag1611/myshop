import React from 'react'
import Cart from './components/Cart'

const routers = [
    {
        path: '/cart',
        exact: true,
        component: () => <Cart />
    }
]
