export const c_1 = `
<script lang="ts">
    let name = 'world'
</script>

<div>
    <input bind:value={name} />
    <h1>Hello {name}!</h1>
</div>`;

export const c_2 = `
<script lang="ts">
    import { page } from '$app/stores';
</script>

<div>
    <p>Hello from url: {$page.url.pathname}</p>
</div>
`;
export const c_3 = `
<script lang="ts">
    let number_1 = 1;
    let number_2 = 2;
    let computed: number;
    $: computed = number_1 + number_2;
</script>

<div>
    <input type="number" bind:value={number_1} />
    <h2>+</h2>
    <input type="number" bind:value={number_2} />
    <h2>=</h2>
    <p>{computed}</p>
</div>
`;
export const c_4 = `
<script lang="ts">
    let number_1 = 1;
    let number_2 = 2;
    let computed: number;
    let multiplied: number;
    let number_3 = 2;
    $: {
		(computed = number_1 + number_2), (multiplied = computed * number_3);
	}
</script>

<div>
    <input type="number" bind:value={computed} disabled />
    <h2>*</h2>
    <input type="number" bind:value={number_3} />
    <h2>=</h2>
    <p>{multiplied}</p>
</div>
`;
