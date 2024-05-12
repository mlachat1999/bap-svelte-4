<script lang="ts">
	import { user } from '$lib/stores/store';
	import { page } from '$app/stores';

	let nameValue = '';
	let emailValue = '';
	let mobileValue = '';
	let addressValue = '';

	function submit() {
		user.setName(nameValue);
		user.setEmail(emailValue);
		user.setMobile(mobileValue);
		user.setAddress(addressValue);
	}

</script>

<main class="flex flex-row justify-center my-24 w-[100%]">
	<div class="flex flex-row items-start bg-white w-[50%] rounded-md py-8">
		<div>
			<div class="flex flex-col gap-4 mx-4 my-4">
				<div>
					<label for="name">Name</label>
					<input
						bind:value={nameValue}
						type="text"
						id="name"
						name="name"
						class="border-2 p-1 rounded-md"
					/>
				</div>
				<div>
					<label for="name">Email</label>
					<input
						bind:value={emailValue}
						type="text"
						id="name"
						name="name"
						class="border-2 p-1 rounded-md"
					/>
				</div>
				<div>
					<label for="name">Mobile</label>
					<input
						bind:value={mobileValue}
						type="text"
						id="name"
						name="name"
						class="border-2 p-1 rounded-md"
					/>
				</div>
				<div>
					<label for="name">Address</label>
					<input
						bind:value={addressValue}
						type="text"
						id="name"
						name="name"
						class="border-2 p-1 rounded-md"
					/>
				</div>
			</div>
			<button on:click={submit} class="border-2 rounded-md w-24 mx-4 bg-gray-300 hover:bg-gray-100">
				Submit
			</button>
			<button class="border-2 rounded-md w-28 mx-4 bg-gray-300 hover:bg-gray-100">
				<a href={$page.url.pathname}/stored>View Profile</a>
			</button>
			
		</div>
		<div class="flex flex-col gap-4 mx-4 my-4">
			<p>current name: {$user.name}</p>
			<p>current email: {$user.email}</p>
			<p>current mobile: {$user.mobile}</p>
			<p>current address: {$user.address}</p>
		</div>
	</div>
</main>
