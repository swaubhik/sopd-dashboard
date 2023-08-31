<template>
    <div class="px-4 pt-6">
        <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
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
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import pb from '../../pocketbase'
import { computed, onBeforeMount, ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
    labels: computed(() => departments.value.map(department => department.name)),
    datasets: [{
        label: 'Amount',
        data: computed(() => departments.value.map(department => department.amount_allocated)),
        backgroundColor: '#6366F1',
        hoverBackgroundColor: '#4F46E5',
        hoverBorderColor: '#4F46E5',
        hoverBorderWidth: 2,
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



const departments = ref([])
onBeforeMount(async () =>
    departments.value = await pb.collection('departments').getFullList({
        sort: '-created',
    }),
)

const totalAmountAllocated = computed(() => departments.value.reduce((total, department) => total + department.amount_allocated, 0))

const totalDepartments = computed(() => departments.value.length)
</script>