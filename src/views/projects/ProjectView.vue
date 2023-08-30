<template>
    <main>
        <div class="p-4 sm:ml-64">
            <h1 class="text-2xl font-semibold dark:text-gray-900 text-white">Projects</h1>
            <p class="mt-1 text-sm dark:text-gray-600 text-gray-400">Welcome home!</p>
            <div class="grid">
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style></style>