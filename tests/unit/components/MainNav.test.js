import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
	it("displays company name", () => {
		const wrapper = mount(MainNav);
		expect(wrapper.text()).toMatch("Boogle Careers");
	});

	it("displays menu items for navigation", () => {
		const wrapper = mount(MainNav);
		const navigationMenuItems = wrapper.findAll(
			"[data-test='main.nav.list.item']"
		);
		const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
		expect(navigationMenuTexts).toEqual([
			"Teams",
			"Locations",
			"Culture",
			"Jobs",
			"How we hire",
			"Students",
		]);
		console.log("navigationMenuTexts: ", navigationMenuTexts);
	});

	describe("When user is logged-out", () => {
		it("prompts user to sign in", () => {
			const wrapper = mount(MainNav, {
				data() {
					return {
						isLoggedIn: false,
					};
				},
			});
			const loginButton = wrapper.find("[data-test='login-button']");
			const profileImage = wrapper.find("[data-test='profile-image']");
			expect(loginButton.exists()).toBe(true);
			expect(profileImage.exists()).toBe(false);
		});
	});

	describe("When user logs in", () => {
		it("prompts user to sign in", () => {
			const wrapper = mount(MainNav, {
				data() {
					return {
						isLoggedIn: true,
					};
				},
			});
			const loginButton = wrapper.find("[data-test='login-button']");
			const profileImage = wrapper.find("[data-test='profile-image']");
			expect(loginButton.exists()).toBe(false);
			expect(profileImage.exists()).toBe(true);
		});
	});
});
