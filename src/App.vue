<script setup lang="ts">
import Editor from "@/components/Editor.vue";
import Switch from "@/components/Switch.vue";
</script>

<template>
    <header class="flex w-full">
        <Switch class="m-auto" label="Live Preview" :onToggle="() => { }" />
    </header>

    <main class="flex place-center h-screen mx-8">
        <Editor class="h-5/6 m-auto" />
    </main>
</template>
