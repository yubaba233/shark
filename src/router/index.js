import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/common/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name:"home",
      component: Home,
      hidden: false,
      redirect: '/Page',
      meta: { title: '首页',icon: 'el-icon-house',requireAuth: false },
      children: [{
        path: 'Page',
        name: 'Page',
        meta: { title: '首页',icon: 'el-icon-house' },
        component: () => import('@/views/page/index')
      }]
    },{
      path: '/example',
      name: 'example',
      component: Home,
      hidden: false,
      redirect: 'example/Table',
      meta: { title: '用例',icon: 'el-icon-loading'},
      children: [{
        path: 'Table',
        name: 'Table',
        component: () => import('@/views/page/Table'),
        meta: { title: '表格', icon: 'el-icon-s-grid' }
      },{
        path: 'Upload',
        name: 'Upload',
        component: () => import('@/views/page/Upload'),
        meta: { title: '上传附件', icon: 'el-icon-upload' }
      }]
    },{
      path: '/auto',
      name: 'task',
      component: Home,
      hidden: false,
      redirect: 'auto/task',
      meta: { title: '自动任务',icon: 'el-icon-loading'},
      children: [{
        path: 'task',
        name: 'task',
        meta: { title: '自动任务' },
        component: () => import('@/views/Quartz/autoTask')
      }]
    },{
      path: '/Login',
      hidden: true,
      component: ()=> import('@/views/login/index')
    },{
      path: '/404',
      component: () => import('@/views/page/404'),
      hidden: true
    },{
      path: '*',
      redirect: '/404',
      hidden: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 导航守卫
//  路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    console.log('进入守卫')
    if (localStorage.token) {  // 判断当前的token是否存在 ； 登录存入的token
      next();
    }
    else {
      next({
        path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
    }
  }
  else {
    next();
  }
});
router.afterEach((to,from)=>{
  console.log('路由切换')
})
export default router
