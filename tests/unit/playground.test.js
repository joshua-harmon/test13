import { evenOrOdd } from "@/playground";
/* .test.js and .spec.js */

describe("basic math", () => {
	it("adds two numbers", () => {
		expect(1 + 1).toBe(2);
	});

	it("subtracts two numbers", () => {
		expect(5 - 3).toBe(2);
		expect(10 - 5).toBe(5);
	});

	describe("evenOrOdd", () => {
		describe("when the number is even", () => {
			it("returns even for even numbers", () => {
				expect(evenOrOdd(2)).toBe("even");
			});
		});
		describe("when the number is odd", () => {
			it("returns odd for odd numbers", () => {
				expect(evenOrOdd(9)).toBe("odd");
			});
		});
	});
});
