<script lang="ts">
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="card">
		<div class="card-header text-center">
			<h3 class="h3">Log in</h3>
		</div>
		<section class="m-4">
			{#if form?.missing}
				<ErrorAlert message={'Username kosong!'} />
			{/if}
            {#if form?.incorrect}
                <ErrorAlert message={'username atau password salah!'} />
            {/if}

			<form class="flex flex-col space-y-4 items-end" action="" method="post">
                <label for="username">
                    <input class="input" title="Username" name="username" type="text" placeholder="Username" value={form?.username ?? ''} required/>
                </label>
                <label for="password">
                    <input class="input" title="Password" name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit" class="btn variant-filled-primary">Masuk</button>
            </form>
		</section>
		<footer></footer>
	</div>
</div>
