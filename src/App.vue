<template>
    <app-side-bar />
    <main class="p-4 sm:ml-64">
        <div class="p-4 border-gray-200 rounded-lg mt-14">
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