import { mount } from "@vue/test-utils";
import type { DOMWrapper } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Switch from "../Switch.vue";

describe("Switch", () => {
	it("toggles the checkbox when clicked", async () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				onToggle,
			},
		});

		const checkbox = wrapper.find(
			'input[type="checkbox"]',
		) as DOMWrapper<HTMLInputElement>;

		checkbox.setValue(true);
		// Force update and wait for the next tick
		await wrapper.vm.$nextTick();

		expect(checkbox.element.checked).toBe(true);
		expect(onToggle).toHaveBeenCalledWith(true);

		await checkbox.setValue(false);
		// Force update and wait for the next tick
		await wrapper.vm.$nextTick();

		expect(checkbox.element.checked).toBe(false);
		expect(onToggle).toHaveBeenCalledWith(false);
	});
});
