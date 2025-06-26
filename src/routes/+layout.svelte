<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import LightDarkToggle from '$lib/components/custom/LightDarkToggle.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<div class="h-screen w-screen">
	{@render children()}
	<LightDarkToggle />
</div>
