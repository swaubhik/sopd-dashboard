<template>
    <main>
        <div class="p-4 sm:ml-64">
            <h1 class="text-2xl font-semibold dark:text-gray-900 text-white">Departments</h1>
            <p class="mt-1 text-sm dark:text-gray-600 text-gray-400">Welcome home!</p>
            <div class="grid">
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
        </div>
    </main>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{ data: [40, 20, 12, 24, 36, 79, 56] }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }

                }
            }
        }
    }
}
</script>

<style></style>