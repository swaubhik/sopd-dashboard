import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => import('../views/departments/DepartmentsView.vue')
    },
    {
      path: '/department/:id',
      name: 'department',
      component: () => import('../views/departments/DepartmentView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projects/ProjectsView.vue')
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/projects/ProjectView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/caegories/CategoriesView.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/caegories/CategoryView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users/UsersView.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/users/UserView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    }
  ]
})
// before every route, check if the user is logged in
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isLoggedIn = userStore.getIsLoggedIn
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !isLoggedIn) {
    return next('/login')
  }

  next()
})

export default router
