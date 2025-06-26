<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/shad/ui/button';
	import { Input } from '$lib/components/shad/ui/input';
	import { Card } from '$lib/components/shad/ui/card';

	let { data }: { data: ActionData } = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center p-6 text-center">
	<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-4xl font-black md:text-6xl">Find a Murgagon</h1>
		</div>

		<form
			class="flex w-full flex-row items-center justify-center text-lg md:w-1/2"
			action="/search"
			method="POST"
			use:enhance
		>
			<Input type="text" name="murgID" placeholder="Search by MurgID" />

			<Button type="submit" variant="secondary" class="ml-4">Search</Button>
		</form>

		<h1 class="text-red-500">
			{data?.error}
		</h1>
	</Card>
</div>
