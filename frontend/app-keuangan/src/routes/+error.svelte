<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-full items-center justify-center">
	<div class="rounded-lg">
		<h1 class="h1 font-bold">{$page.status}</h1>
		<p class="text-xl ">{$page.error?.message ?? 'Terjadi Kesalahan'}</p>
	</div>
</div>
