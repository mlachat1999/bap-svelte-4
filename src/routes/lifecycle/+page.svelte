<script lang="ts">
	import { Code } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { lc_1, lc_2 } from '$lib/pre_codes/lifecycle';

	let code_1: boolean = false;
	let code_2: boolean = false;

	function toggle(input: string) {
		if (input === '1') code_1 = !code_1;
		else if (input === '2') code_2 = !code_2;
	}
</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-col justify-start gap-2 bg-white w-[50%] rounded-md py-8">
		<div class="flex flex-row items-center gap-4 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('1')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">1.</h2>
			<a href="{$page.url.pathname}/onmount" class="border-2 rounded-md p-2">onMount</a>
		</div>
		{#if code_1}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md w-[60%]">
				<code class="text-xs"
					><pre>
                    {lc_1}
            </pre></code
				>
			</div>
		{/if}
		<div class="flex flex-row items-center gap-4 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('2')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">2.</h2>
			<a href="{$page.url.pathname}/ondestroy" class="border-2 rounded-md p-2">onDestroy</a>
		</div>
		{#if code_2}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md w-[60%]">
				<code class="text-xs"
					><pre>
                    {lc_2}
            </pre></code
				>
			</div>
		{/if}
	</div>
</main>
