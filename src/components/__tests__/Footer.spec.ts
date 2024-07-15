import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Footer from "../Footer.vue";

describe("Footer", () => {
	const currentYear = new Date().getFullYear();
	const wrapper = mount(Footer);

	it("renders brand properly", () => {
		const brandContainer = wrapper.find("#brand");

		const appName = brandContainer.find("h2");
		const copyrightLabel = brandContainer.find("small");

		expect(appName.text()).toEqual("Scribb");
		expect(copyrightLabel.text()).toEqual(`© ${currentYear} Raman Verma`);
	});
});
