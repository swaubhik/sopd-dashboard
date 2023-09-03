<template>
    <div class="px-4 pt-6">
        <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mb-3">
            <div
                class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">

                <div class="flex items-center justify-between mb-4">
                    <div class="flex-shrink-0">
                        <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">{{
                            totalAmountAllocated }} Lakh</span>
                        <h3 class="text-base font-light text-gray-500 dark:text-gray-400">
                            Total Amount Allocatted to Departments
                        </h3>
                    </div>
                    <div
                        class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                        12.5%
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div class="relative w-full">
                    <Bar :data="chartData" :options="chartOptions" />
                </div>
            </div>
            <div
                class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div
                    class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div class="w-full">
                        <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Total Departments</h3>
                        <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{{
                            totalDepartments
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto">
                <div
                    class="inline-block min-w-full align-middle bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-3 dark:bg-gray-800">
                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600 ">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                                            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-all" class="sr-only">checkbox</label>
                                    </div>
                                </th>

                                <th v-for="(header, i) in tableHeader" :key="i" scope="col"
                                    class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    {{ header }}
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr v-for="(department, index) in departments" :key="index"
                                class="hover:bg-gray-100 dark:hover:bg-gray-900">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-194556" aria-describedby="checkbox-1" type="checkbox"
                                            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-194556" class="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <div class="text-base font-semibold text-gray-900 dark:text-white">
                                        <data value="name">{{ department.name }}</data>
                                    </div>
                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <data value="full name"> Description</data>
                                    </div>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <data value="Amount Allocated">{{ department.financial_outlay }}</data>
                                </td>
                                <td
                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                    <data value="Financial Progress">{{ department.financial_progress }} %</data>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Suspense>
                                        <p>{{
                                            department.expand.number_of_projects.total
                                        }}</p>
                                    </Suspense>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <data value="price">{{ formatDate(department.updated) }}</data>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <router-link :to="{ name: 'department', params: { id: department.id } }"
                                        class="text-indigo-600 hover:text-indigo-900">View</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useDepartmentStore } from '../../stores/department'
import { computed, ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

useDepartmentStore().fetchDepartments()

const tableHeader = ref([
    'Department Name',
    'Financial Outlay',
    'Financial Progress',
    'Number of Projects / Schemes',
    'Last Updated'
])

const departments = computed(() => useDepartmentStore().departments)

const totalAmountAllocated = computed(() => departments.value.reduce((acc, department) => acc + department.financial_outlay, 0))
const totalDepartments = computed(() => departments.value.length)

const formatDate = (date) => {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
}
const chartBgColor = ref([
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',

])
const chartData = ref({
    labels: departments.value.map(department => department.name),
    datasets: [{
        label: 'Amount',
        data: departments.value.map(department => department.financial_outlay),
        hoverBorderWidth: 2,
        hoverBorderColor: '#fff',
        backgroundColor: chartBgColor.value.map(color => color),
        borderRadius: 4,
    }],
})

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
})
</script>