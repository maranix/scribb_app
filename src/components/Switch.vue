<script setup lang="ts">
import type { ToggleCallback } from "@/lib/types";
import { ref, watch } from "vue";

const props = defineProps<{
	label: string;
	onToggle: ToggleCallback;
}>();

const checked = ref(false);
watch(checked, (curr, prev) => {
	if (curr === prev) return;

	props.onToggle(curr);
});
</script>

<template>
    <label class="flex justify-between items-center py-2 rounded-md">
        {{ props.label }}
        <input v-model="checked" type="checkbox" class="appearance-none peer">
        <span
            class="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-highlight rounded-full after:w-4 after:h-4 after:bg-focus after:rounded-full after:shadow-md peer-checked:bg-focus duration-300 ease-in-out after:duration-300 peer-checked:after:bg-highlight peer-checked:after:translate-x-4"></span>
    </label>
</template>
