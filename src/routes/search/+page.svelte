<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/shad/ui/button';
	import { Input } from '$lib/components/shad/ui/input';
	import { Card } from '$lib/components/shad/ui/card';
	import { Canvas, useTask } from '@threlte/core';
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { form }: PageProps = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center p-6 text-center">
	<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-4xl font-black md:text-6xl">Find a Murgagon</h1>
		</div>

		<form
			class="flex w-full flex-row items-center justify-center text-lg md:w-1/2"
			method="POST"
			use:enhance
		>
			<Input type="text" name="murgID" placeholder="Search by MurgID" />

			<Button type="submit" variant="secondary" class="ml-4">Search</Button>
		</form>

		<h1 class="text-red-500">
			{#if form?.error}
				{form?.error}
			{/if}
		</h1>
	</Card>

	{#if form?.murgagon}
		<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
			<h2 class="text-2xl font-bold">{form?.murgagon.owner}</h2>

			<div class="flex w-full flex-row items-center justify-around">
				<div class="flex flex-col items-start justify-center text-left">
					<p class="text-lg"><span class="font-black">MurgID:</span> {form?.murgagon.murgId}</p>
					<p class="text-lg">
						<span class="font-black">Issued:</span>
						{new Date(form?.murgagon.issuedAt).toDateString()}
					</p>
					<p class="text-lg">
						<span class="font-black">Generation:</span>
						{form?.murgagon.generation}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center"></div>
			</div>
		</Card>
	{/if}
</div>
