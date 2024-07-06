<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let user = true;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">SDN 1 ABC</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/about" target="_blank" rel="noreferrer">
					About
				</a>
				<a class="btn btn-sm variant-ghost-surface" href="/siswa" rel="noreferrer"> Siswa </a>
				<!-- <a class="btn btn-sm variant-ghost-surface" href="/pembayaran" rel="noreferrer"> Pembayaran </a> -->
				<!-- <a class="btn btn-sm variant-filled-primary" href="/login" rel="noreferrer"> Login </a> -->
				{#if user}
					<a class="btn btn-sm variant-filled-error" href="/logout" rel="noreferrer"> Logout </a>
					<Avatar width="w-8" initials="K" background="bg-primary-500" />
				{/if}
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<div class="flex h-10 justify-center items-center mt-4 bg-surface-800">
			<p class="text-sm text-center">
				© 2024. All rights reserved. Made with 💖 by <a
					href="https://github.com/nixon42"
					target="_blank"
					class="underline">Alief Cahyo Utomo</a
				> | Email: aliepcahyo@gmail.com
			</p>
			<br />
		</div>
	</svelte:fragment>
</AppShell>
