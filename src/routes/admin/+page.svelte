<script lang="ts">
	import type { PageProps } from './$types';
	import { Input } from '$lib/components/shad/ui/input';
	import { Button, buttonVariants } from '$lib/components/shad/ui/button';
	import { Label } from '$lib/components/shad/ui/label';
	import * as Dialog from '$lib/components/shad/ui/dialog/index.js';
	import { CalendarIcon, ChevronRight } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Card } from '$lib/components/shad/ui/card';
	import { Calendar } from '$lib/components/shad/ui/calendar/index.js';
	import * as Popover from '$lib/components/shad/ui/popover/index.js';

	let { data }: PageProps = $props();

	const df = new DateFormatter('en-UK', {
		dateStyle: 'long'
	});

	let value = $state<DateValue>();
</script>

<svelte:head>
	<title>Murgagon - Admin</title>
</svelte:head>

{#if !data.loggedIn}
	<div class="flex h-screen w-screen flex-col items-center justify-center p-6 text-center">
		<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-4xl font-black md:text-6xl">Admin Login</h1>
			</div>

			<form
				class="flex w-full flex-row items-center justify-center text-lg md:w-1/2"
				action="?/login"
				method="POST"
				use:enhance
			>
				<Input
					type="password"
					name="password"
					placeholder="Enter admin password"
					class="rounded-tr-none rounded-br-none"
				/>

				<Button type="submit" variant="secondary" class="rounded-tl-none rounded-bl-none">
					<ChevronRight />
				</Button>
			</form>
		</Card>
	</div>
{:else}
	<div class="flex h-screen w-screen flex-col items-center justify-center p-6 text-center">
		<Card class="mt-8 flex w-full flex-col items-center justify-center p-6 md:w-1/2">
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-3xl font-black md:text-6xl">Admin Dashboard</h1>
			</div>

			<div class="flex flex-row">
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: 'secondary' })}
						>Issue Murgagon</Dialog.Trigger
					>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Issue a Murgagon</Dialog.Title>
						</Dialog.Header>
						<form
							class="flex flex-col items-start justify-center gap-4"
							action="?/issue"
							method="POST"
							use:enhance
						>
							<Label for="murgID">MurgID</Label>
							<div class="flex h-full flex-row items-center justify-center">
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
							</div>

							<Label for="date" class="mt-2">Date of Issue</Label>
							<Input type="hidden" name="date" bind:value />
							<Popover.Root>
								<Popover.Trigger>
									{#snippet child({ props })}
										<Button
											variant="outline"
											class={cn(
												'w-[280px] justify-start text-left font-normal',
												!value && 'text-muted-foreground'
											)}
											{...props}
										>
											<CalendarIcon class="mr-2 size-4" />
											{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a date'}
										</Button>
									{/snippet}
								</Popover.Trigger>
								<Popover.Content class="w-auto p-0">
									<Calendar bind:value type="single" initialFocus />
								</Popover.Content>
							</Popover.Root>

							<Label for="owner" class="mt-2">Owner Name</Label>
							<Input
								type="text"
								name="owner"
								id="owner"
								placeholder="Enter owner's name"
								required
							/>

							<Label for="generation" class="mt-2">Generation</Label>
							<Input
								type="text"
								name="generation"
								id="generation"
								placeholder="Generation (e.g., 1, 2, 3)"
								required
							/>

							<Dialog.Footer>
								<Button type="submit">Issue</Button>
							</Dialog.Footer>
						</form>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</Card>
	</div>
{/if}
