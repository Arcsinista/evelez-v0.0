<script lang="ts" setup>
    const { data: tasks, error, status, pending, refresh } = await useFetch("/api/tasks", { lazy: true });
</script>

<template>
    <h1>Hello world</h1>

    <article v-if="status === 'pending'" aria-busy="true" />
    
    <article class="error" v-else-if="error">
        {{ error.statusMessage }}
    </article>

    <div v-else>
        <article v-for="task in tasks" :key="task.id">
        {{ task.title }}
        </article>
    </div>
</template>


<style>
    .error {
        color: red;
    }
</style>