import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home.vue')
const Index = () => import('../views/Index.vue')
const ArtList = () => import('../views/articles/ArtList.vue')
const ArtCreate = () => import('../views/articles/ArtCreate.vue')
const ArtContent = () => import('../views/articles/ArtContent.vue')


Vue.use(VueRouter)

  const routes = [
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path: '/',
      name: 'Home',
      redirect:'/index',
      component: Home,
      children:[
        {
          path:'/index/',
          name:'Index',
          component:Index,
        },
        {
          path:'/art-list',
          name:'ArtList',
          component:ArtList,
          children:[
            {
              path:'/art-content/:id',
              name:'ArtContent',
              component:ArtContent,
            }
          ]
        },
        {
          path:'/art-create',
          name:'ArtCreate',
          component:ArtCreate,
        }
      ]
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
