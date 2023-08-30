<template>
  <main>
    <div>
      <h1 class="text-2xl font-semibold dark:text-gray-900 text-white">Home</h1>
      <p class="mt-1 text-sm dark:text-gray-600 text-gray-400">Welcome home!</p>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-52 rounded px-2 py-3 bg-gray-50 shadow-md">
          <Bar :options="chartOptions" :data="chartData" />
        </div>
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