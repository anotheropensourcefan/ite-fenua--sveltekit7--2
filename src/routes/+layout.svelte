<script lang="ts">
	import type { LayoutData } from './$types';
	// Import Framework7
	import Framework7 from 'framework7/lite-bundle';
	// Import Framework7-Svelte Plugin
	import Framework7Svelte from 'framework7-svelte';
	// Import Framework7 Styles
	import 'framework7/css/bundle';
	// Init F7 Svelte Plugin
	Framework7.use(Framework7Svelte);

	export let data: LayoutData;
</script>
