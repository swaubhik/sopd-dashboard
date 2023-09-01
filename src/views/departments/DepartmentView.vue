<template>
    <div class="px-4 pt-6">
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
                                        <data value="full name">{{ Description }}</data>
                                    </div>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <data value="Amount Allocated">{{ department.amount_allocated }}</data>
                                </td>
                                <td
                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                    <data value="Financial Progress">{{ department.financial_progress }}</data>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <data value="id">{{ department.project_count.length }}</data>
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
import { useDepartmentStore } from '../../stores/department';
</script>

<style></style>