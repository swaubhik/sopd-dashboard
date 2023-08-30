<template>
    <app-side-bar />
    <main class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen">
            <router-view />
        </div>
    </main>
</template>

<script>
import AppSideBar from './components/AppSideBar.vue'
export default {
    components: { AppSideBar },
}
</script>

<style></style>