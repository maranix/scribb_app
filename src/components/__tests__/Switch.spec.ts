import { mount } from "@vue/test-utils";
import type { DOMWrapper } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Switch from "../Switch.vue";

describe("Switch", () => {
	const label = "Test Label";
	const onToggle = vi.fn();

	it("renders the label correctly", () => {
		const wrapper = mount(Switch, {
			props: {
				label,
				onToggle,
			},
		});
		expect(wrapper.text()).toContain("Test Label");
	});

	it("toggles the checkbox when clicked", async () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				label,
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

	it("does not call onToggle if the checkbox state does not change", async () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				label,
				onToggle,
			},
		});

		const checkbox = wrapper.find('input[type="checkbox"]');
		await checkbox.setValue(false);

		await wrapper.vm.$nextTick();

		expect(onToggle).not.toHaveBeenCalled();
	});
});
