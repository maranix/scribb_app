<script setup lang="ts">
import type { ToggleCallback } from "@/lib/types";
import { ref, watchSyncEffect } from "vue";

const props = defineProps<{
	onToggle: ToggleCallback;
}>();

const checked = ref(false);

watchSyncEffect(() => {
	props.onToggle(checked.value);
});
</script>

<template>
    <label class="flex justify-between items-center rounded-md">
        <input v-model="checked" type="checkbox" class="appearance-none peer">
        <span
            class="w-10 h-6 flex items-center p-1 bg-highlight rounded-full after:w-4 after:h-4 after:bg-focus after:rounded-full after:shadow-md peer-checked:bg-focus duration-300 ease-in-out after:duration-300 peer-checked:after:bg-highlight peer-checked:after:translate-x-4 cursor-pointer"></span>
    </label>
</template>
