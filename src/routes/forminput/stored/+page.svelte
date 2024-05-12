<script lang="ts">
	import { user } from '$lib/stores/store';
</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-col items-start bg-white w-[50%] rounded-md py-8">
		<h2 class="mx-4 font-semibold">Profile details</h2>
		<div class="flex flex-col gap-4 mx-4 my-4">
			<p>name: {$user.name}</p>
			<p>email: {$user.email}</p>
			<p>mobile: {$user.mobile}</p>
			<p>address: {$user.address}</p>
		</div>
		<div class="flex flex-row gap-4">
			<button class="mx-4 p-2 rounded-md bg-gray-200"><a href="/forminput">Go Back</a></button>
			<button class="mx-4 p-2 rounded-md bg-gray-200" on:click={() => user.deleteInfo()}>Delete User Data</button>
		</div>
	</div>
</main>
