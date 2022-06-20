<template>
	<button
		class="px-5 py-3 font-medium text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue"
		@click="handleClick"
	>
		Sign In
	</button>
</template>

<script>
export default {
	name: "ActionButton",
	data() {
		return {};
	},
	methods: {
		handleClick() {
			console.log("I have been clicked!!");
		},
	},
};
</script>

<style></style>
