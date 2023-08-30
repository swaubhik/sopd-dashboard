import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      }
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => import('../views/departments/DepartmentsView.vue'),
      meta: {
        title: 'Departments',
        requiresAuth: true
      }
    },
    {
      path: '/department/:id',
      name: 'department',
      component: () => import('../views/departments/DepartmentView.vue'),
      meta: {
        title: 'Department',
        requiresAuth: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projects/ProjectsView.vue'),
      meta: {
        title: 'Projects',
        requiresAuth: true
      }
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/projects/ProjectView.vue'),
      meta: {
        title: 'Project',
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/categories/CategoriesView.vue'),
      meta: {
        title: 'Categories',
        requiresAuth: true
      }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/categories/CategoryView.vue'),
      meta: {
        title: 'Category',
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users/UsersView.vue'),
      meta: {
        title: 'Users',
        requiresAuth: true
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/users/UserView.vue'),
      meta: {
        title: 'User',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      meta: {
        title: 'Register'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | SOPD Dashboard`
  next()
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isLoggedIn = userStore.isLoggedIn
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
