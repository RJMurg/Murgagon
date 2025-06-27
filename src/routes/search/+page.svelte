<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/shad/ui/button';
	import { Input } from '$lib/components/shad/ui/input';
	import { Card } from '$lib/components/shad/ui/card';
	import { Badge } from '$lib/components/shad/ui/badge';

	let { form }: PageProps = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center p-6 text-center">
	<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-4xl font-black md:text-6xl">
				Find a Murgagon <Badge variant="warning">Alpha</Badge>
			</h1>
			<h1 class="mt-2 text-lg font-light text-neutral-500 md:text-xl">
				The Murgagon Registry is currently in Alpha. Not all features are available
			</h1>
		</div>

		<form
			class="flex w-full flex-row items-center justify-center text-lg md:w-1/2"
			method="POST"
			use:enhance
		>
			<div
				class="border-input bg-background dark:bg-input/30 ring-offset-background l flex h-9 min-w-0 items-center justify-center rounded-md rounded-tr-none rounded-br-none border px-3 py-1 font-black shadow-xs transition-[color,box-shadow] outline-none md:text-sm"
			>
				M.
			</div>
			<Input
				type="text"
				name="murgID"
				id="murgID"
				placeholder="ABCD"
				class="w-full rounded-tl-none rounded-bl-none"
				required
			/>

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
			<h2 class="text-3xl font-black md:text-6xl">{form?.murgagon.owner}</h2>

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
				<div class="flex flex-col items-center justify-center">
					<img
						src={'generations/' + form?.murgagon.generation.toLowerCase().replace(' ', '') + '.png'}
						alt="A Marble Hexagon"
						class="h-auto w-32 rounded-full"
					/>
				</div>
			</div>
		</Card>
	{/if}
</div>
