import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
	it("displays company name", () => {
		const wrapper = mount(MainNav, {
			data() {
				return {
					company: "Boogle Careers",
				};
			},
		});
		expect(wrapper.text()).toMatch("Boogle Careers");
	});
});
