import Vue from 'vue'
import Router from 'vue-router'
import Lists from '@/components/Lists'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Order from '@/components/Order'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		name:'Lists',
  		component:Lists
  	},
    {
      path: '//:currentStore',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/home/:store',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/cart/:goodsID',
      name: 'Cart',
      component: Cart
    }
  ]
})
