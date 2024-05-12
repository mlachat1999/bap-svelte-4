export const lc_1 = `
<script lang="ts">
	import { onMount } from 'svelte';
	let data: Array<any> = [];

	onMount(async () => {
		const res = await fetch('https://perenual.com/api/species-list?key=${'api-key'}');
		const api = await res.json();
		data = api.data;
	});
</script>

<main>
	<div>
		{#each data as item}
			<div>
				<p>{item.common_name}</p>
				<img src={item.default_image.thumbnail} alt=""/>
			</div>
		{:else}
			<p>loading...</p>
		{/each}
	</div>
</main>
`;

export const lc_2 = `
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

<main>
	<div>
		<nav data-sveltekit-reload>
			<a href={$page.url.pathname}>reload</a>
		</nav>
		<p>
			The page has been open for
			<span>{seconds}</span>
			{seconds === 1 ? 'second' : 'seconds'}
		</p>
	</div>
</main>
`;
