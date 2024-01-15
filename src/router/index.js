import i18n from '@/lang/index'
import { createRouter, createWebHashHistory } from 'vue-router'

// FIXED 修复非法用户push问题
// 静态路由
export const constantRoutes = [
  {
    path: '/',
    hidden: false, // 是否隐藏
    redirect: '/Home',
    alwaysShow: false, // 是否显示根节点路由
    meta: {
      title: i18n.global.t('首页'),
      icon: 'home'
    },
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
        meta: {
          title: i18n.global.t('首页'),
          icon: 'home',
          affix: true, // 是否固定标签页
          noCache: false // 是否会被<keep-alive>缓存 true会 false 不会
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login/index.vue'),
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes]
})
export default router
