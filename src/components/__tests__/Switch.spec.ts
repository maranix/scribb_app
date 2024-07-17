import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Switch from "../Switch.vue";

describe("Switch", () => {
	const label = "Test Label";

	it("doesn't render the label if not provided", () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				onToggle,
			},
		});
		expect(wrapper.text()).toContain("");
	});

	it("renders the label correctly", () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				label,
				onToggle,
			},
		});
		expect(wrapper.text()).toContain(label);
	});

	it("toggles the checkbox when clicked", async () => {
		const onToggle = vi.fn();
		const wrapper = mount(Switch, {
			props: {
				label,
				onToggle,
			},
		});

		const checkbox = wrapper.find<HTMLInputElement>('input[type="checkbox"]');

		checkbox.setValue(true);
		// Force update and wait for the next tick
		await wrapper.vm.$nextTick();

		expect(checkbox.element.checked).toBe(true);
		expect(onToggle).toHaveBeenCalledWith(true);

		await checkbox.setValue(false);
		// Force update and wait for the next tick
		await wrapper.vm.$nextTick();

		expect(checkbox.element.checked).toBeFalsy();
		expect(onToggle).toHaveBeenCalledWith(false);
	});

	it("callback is not called until the initial value changes", async () => {
		const onToggle = vi.fn();

		const wrapper = mount(Switch, {
			props: {
				label,
				onToggle,
			},
		});
		const checkbox = wrapper.find<HTMLInputElement>("input");

		// Check if it is mounted
		expect(wrapper.text()).toContain(label);

		// Validate that callback was never executed
		expect(onToggle).toHaveBeenCalledTimes(0);

		// Toggle checkbox with [false], which is our initial value.
		checkbox.setValue(false);

		// Goto next frame
		await wrapper.vm.$nextTick();

		// Verify that callback was never executed because the initial value did not change
		expect(onToggle).toHaveBeenCalledTimes(0);
		expect(checkbox.element.checked).toBeFalsy();

		// Toggle checkbox with [true]
		checkbox.setValue(true);

		// Goto next frame
		await wrapper.vm.$nextTick();

		// Verify that callback was executed only once and the value of checkbox is now [true].
		expect(onToggle).toHaveBeenCalledTimes(1);
		expect(onToggle).toHaveBeenCalledWith(true);
		expect(checkbox.element.checked).toBeTruthy();
	});
});
