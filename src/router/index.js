import i18n from '@/lang/index'
import { createRouter, createWebHashHistory } from 'vue-router'

// FIXED 修复非法用户push问题
// 静态路由
export const constantRoutes = [
  {
    path: '/Login',
    component: () => import('../views/Login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    hidden: false, // 是否隐藏
    redirect: '/Login',
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
    path: '/Account',
    hidden: false, // 是否隐藏
    redirect: '/Account/User',
    alwaysShow: false, // 是否显示根节点路由
    meta: {
      title: i18n.global.t('账户管理'),
      icon: 'home'
    },
    children: [
      {
        path: 'User',
        name: 'User',
        component: () => import('../views/Account/User/index.vue'),
        meta: {
          title: i18n.global.t('用户管理'),
          icon: 'home',
          affix: true, // 是否固定标签页
          noCache: false // 是否会被<keep-alive>缓存 true会 false 不会
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes]
})
export default router
