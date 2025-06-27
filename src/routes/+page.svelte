<script lang="ts">
	import { Button } from '$lib/components/shad/ui/button';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center text-center">
	<div class="flex flex-col items-center justify-center">
		<img src="logo.png" class="w-10/12 md:w-8/12" alt="The Murgagon Logo" />
		<h2 class="mt-4 text-xl font-extralight italic md:text-2xl">Registry V1</h2>
	</div>

	<div class="mt-8 flex flex-row items-center justify-center">
		<Button variant="secondary" href="/search" class="mr-4">
			Search by
			<span class="font-black italic">MurgID</span>
		</Button>
	</div>
</div>
