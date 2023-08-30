import { defineStore } from 'pinia'
import pb from '../pocketbase'
import router from '../router'
// get pocketbase_auth.model from local storage

const userModel = localStorage.getItem('pocketbase_auth')
  ? JSON.parse(localStorage.getItem('pocketbase_auth'))
  : {}

export const useUserStore = defineStore('users', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      users: [],
      currentUser: userModel.model || {},
      isLoggedIn: localStorage.getItem('pocketbase_auth') ? true : false,
      errorMsg: ''
    }
  },
  getters: {
    getUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
    getIsLoggedIn: (state) => state.isLoggedIn,
    getErrorMsg: (state) => state.errorMsg
  },
  actions: {
    async fetchUsers() {
      const users = await pb.collection('users').getFullList({
        sort: '-created'
      })
      this.users = users
    },
    async fetchUser(id) {
      await pb.collection('users').getOne(id)
    },
    async createUser(user) {
      await pb.collection('users').create(user)
      await pb.collection('users').requestVerification(user.email)
    },

    async login({ email, password }) {
      try {
        await pb.collection('users').authWithPassword(email, password)
        // pb.authStore.save()
        this.currentUser = pb.authStore.model
        // push to home page and reload
        router.push({ name: 'home' })
        this.isLoggedIn = true
      } catch (error) {
        this.errorMsg = error.message
      }
    },
    async logout() {
      pb.authStore.clear()
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    },
    async register({ email, password }) {
      const { data } = await pb.post('/register', { email, password })
      this.currentUser = data
      this.isLoggedIn = true
    }
  }
})
