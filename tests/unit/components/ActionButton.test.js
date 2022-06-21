import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
	it("renders text", () => {
		const wrapper = mount(ActionButton, {
			props: {
				text: "the action button is clickable",
				type: "primary",
			},
		});
		expect(wrapper.text()).toMatch("the action button is clickable");
	});
	it("applies one of several styles", () => {
		const wrapper = mount(ActionButton, {
			props: {
				type: "primary",
			},
		});
		const button = wrapper.find("button");
		expect(button.classes("primary")).toBe(true);
	});
});
