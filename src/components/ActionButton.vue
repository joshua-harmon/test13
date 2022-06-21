<template>
	<button :class="buttonClass">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "ActionButton",
	props: {
		text: {
			type: String,
			require: true,
			default: "Sign In",
		},
		type: {
			type: String,
			require: false,
			default: "primary",
		},
	},
	data() {
		return {};
	},
	computed: {
		buttonClass() {
			return {
				[this.type]: true,
			};
		},
	},
	methods: {},
};
</script>

<style scoped>
button {
	@apply px-5 py-3 rounded font-medium;
}
.primary {
	@apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
	@apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
