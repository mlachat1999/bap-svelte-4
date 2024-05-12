<script lang="ts">
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';

	function onInterval(callback: any, milliseconds: number) {
		const interval = setInterval(callback, milliseconds);

		onDestroy(() => {
			clearInterval(interval);
		});
	}

	let seconds = 0;
	onInterval(() => (seconds += 1), 1000);
</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-row items-center bg-white w-[50%] rounded-md py-8">
		<nav data-sveltekit-reload class="">
			<a href={$page.url.pathname} class="border-2 rounded-md p-2 mx-8">reload</a>
		</nav>
		<p class="">
			The page has been open for
			<span class="font-semibold">{seconds}</span>
			{seconds === 1 ? 'second' : 'seconds'}
		</p>
	</div>
</main>
