<script setup lang="ts">
import type { ToggleCallback } from "@/types";
import { ref, watch } from "vue";

interface Props {
	label?: string;
	onToggle: ToggleCallback;
}

const props = defineProps<Props>();
const checked = ref(false);

watch(checked, (curr, prev) => {
	if (curr !== prev) {
		props.onToggle(checked.value);
	}
});
</script>

<template>
    <label class="w-min flex items-center rounded-md">
        {{ props.label }}
        <input type="checkbox" class="appearance-none peer" v-model="checked">
        <span class="w-10 h-6 m-4 flex items-center p-1 bg-highlight rounded-full after:w-4 after:h-4 after:bg-focus
            after:rounded-full after:shadow-md peer-checked:bg-focus duration-300 ease-in-out after:duration-300
            peer-checked:after:bg-highlight peer-checked:after:translate-x-4 cursor-pointer"></span>
    </label>
</template>
