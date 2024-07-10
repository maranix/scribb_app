<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
    <div id="editor" class="bg-highlight rounded-md w-full">
        <textarea v-model="input"
            class="w-full h-full p-4 bg-transparent resize-none border-none outline-none"></textarea>
    </div>
</template>
