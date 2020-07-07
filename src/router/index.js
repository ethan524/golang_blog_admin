import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home.vue')
const Index = () => import('../views/Index.vue')
// 博客
const ArtList = () => import('../views/articles/ArtList.vue')
const ArtCreate = () => import('../views/articles/ArtCreate.vue')
const ArtContent = () => import('../views/articles/ArtContent.vue')

// 菜单
const MenuList = () => import('../views/menu/MenuList.vue')

// 评论
const CommentSensitive = () => import('../views/comment/CommentSensitive.vue')




// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
        },
        {
            path:'/art-content/:id',
            name:'ArtContent',
            component:ArtContent,
        },
        {
          path:'/art-create',
          name:'ArtCreate',
          component:ArtCreate,
        },
        {
          path:'/menu-list',
          name:'MenuList',
          component:MenuList
        },
        {
          path:'/comment-sensitive',
          name:'CommentSensitive',
          component:CommentSensitive
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
