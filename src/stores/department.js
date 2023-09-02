import { defineStore } from 'pinia'
import pb from '../pocketbase'

export const useDepartmentStore = defineStore('departments', {
  state: () => {
    return {
      departments: [],
      errorMsg: '',
      departmentOverallProjectStatus: Number
    }
  },
  getters: {
    getDepartments: (state) => state.departments,
    getCurrentDepartment: (state) => state.currentDepartment,
    getErrorMsg: (state) => state.errorMsg
  },
  actions: {
    async fetchDepartments() {
      const departments = await pb.collection('departments').getFullList({
        sort: '-created',
        expand: 'number_of_projects'
      })
      this.departments = departments
    },
    async fetchDepartment(id) {
      await pb.collection('departments').getOne(id)
    },
    async createDepartment(department) {
      await pb.collection('departments').create(department)
    },
    async updateDepartment(department) {
      await pb.collection('departments').update(department)
    },
    async deleteDepartment(id) {
      await pb.collection('departments').delete(id)
    }
  }
})
