<script lang="ts">
	import { Button } from '$lib/components/shad/ui/button';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center text-center">
	<div class="flex flex-col items-center justify-center">
		<img src="logo.png" class="w-10/12 md:w-8/12" alt="The Murgagon Logo" />
		<h1 class="mt-4 text-3xl font-thin italic md:text-6xl">More than just a shape</h1>
	</div>

	<div class="mt-8 flex flex-row items-center justify-center">
		<Button variant="secondary" href="/search" class="mr-4">
			Search by
			<span class="font-black italic">MurgID</span>
		</Button>
		<Button variant="outline" href="/login" class="mr-4">Log In / Register</Button>
	</div>
</div>
