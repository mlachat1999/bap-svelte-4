<script lang="ts">
	import { page } from '$app/stores';
	import { Code } from 'lucide-svelte';
	import { c_1, c_2, c_3, c_4 } from '$lib/pre_codes/reactivity';
	let name = 'world';
	let number_1 = 1;
	let number_2 = 2;
	let computed: number;
	let multiplied: number;
	let number_3 = 2;
	$: {
		(computed = number_1 + number_2), (multiplied = computed * number_3);
	}
	let code_1: boolean = false;
	let code_2: boolean = false;
	let code_3: boolean = false;
	let code_4: boolean = false;

	function toggle(input: string) {
		if (input === '1') code_1 = !code_1;
		else if (input === '2') code_2 = !code_2;
		else if (input === '3') code_3 = !code_3;
		else if (input === '4') code_4 = !code_4;
	}
</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-col bg-white w-[50%] rounded-md py-8">
		<div class="flex flex-row items-center gap-8 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('1')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">1.</h2>
			<input class="border-2 rounded-md p-1" bind:value={name} />
			<h1>Hello {name}!</h1>
		</div>
		{#if code_1}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md w-[50%]">
				<code class="text-xs"
					><pre>
						{c_1}
				</pre></code
				>
			</div>
		{/if}
		<div class="flex flex-row items-center gap-8 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('2')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">2.</h2>
			<p>Hello from url: {$page.url.pathname}</p>
		</div>
		{#if code_2}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md color-[#666] w-[60%]">
				<code class="text-xs"
					><pre>
					{c_2}
			</pre></code
				>
			</div>
		{/if}
		<div class="flex flex-row items-center gap-8 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('3')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">3.</h2>
			<input type="number" class="border-2 rounded-md p-1 w-[10%]" bind:value={number_1} />
			<h2 class="text-xl">+</h2>
			<input type="number" class="border-2 rounded-md p-1 w-[10%]" bind:value={number_2} />
			<h2 class="text-xl">=</h2>
			<p class="text-xl">{computed}</p>
		</div>
		{#if code_3}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md color-[#666] w-[70%]">
				<code class="text-xs"
					><pre>
				{c_3}
		</pre></code
				>
			</div>
		{/if}
		<div class="flex flex-row items-center gap-8 mx-4 my-4">
			<a
				href="/"
				on:click|preventDefault={() => toggle('4')}
				class="rounded-md border-2 p-1 bg-gray-300"><Code class="w-4 h-4" /></a
			>
			<h2 class="text-xl mr-4">4.</h2>
			<input type="number" class="border-2 rounded-md p-1 w-[10%]" bind:value={computed} disabled />
			<h2 class="text-xl">*</h2>
			<input type="number" class="border-2 rounded-md p-1 w-[10%]" bind:value={number_3} />
			<h2 class="text-xl">=</h2>
			<p class="text-xl">{multiplied}</p>
		</div>
		{#if code_4}
			<div class=" mx-4 p-2 bg-[#f4f4f4] border-2 rounded-md color-[#666] w-[80%]">
				<code class="text-xs"
					><pre>
					{c_4}
			</pre></code
				>
			</div>
		{/if}
	</div>
</main>
