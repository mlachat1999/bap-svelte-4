<script lang="ts">
	import { onMount } from 'svelte';

	const key = 'sk-asTT663fb186148805426';
	let data: Array<any> = [];
	let viewPage = Math.floor(Math.random() * 50) + 1;

	onMount(async () => {
		const res = await fetch(`https://perenual.com/api/species-list?key=${key}&page=${viewPage}`);
		const api = await res.json();

		const limit = 9;
		const unique = [];
		const seen = new Set();

		for (const item of api.data) {
			if (unique.length === limit) break;
			if (!seen.has(item.common_name)) {
				seen.add(item.common_name);
				unique.push(item);
			}
		}
		data = unique;
		console.log(data);
	});
</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-col bg-white w-[50%] rounded-md py-8">
		<div class="flex flex-wrap justify-center gap-8 mx-4 my-4 w-full">
			{#each data as item}
				<div class="flex flex-col items-center w-1/4 gap-2">
					<p class="text-xl font-semibold">{item.common_name}</p>
					<img class="rounded-full" src={item.default_image.thumbnail} alt="" />
				</div>
			{:else}
				<p>loading...</p>
			{/each}
		</div>
	</div>
</main>
