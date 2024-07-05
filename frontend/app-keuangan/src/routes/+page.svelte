<script lang="ts">
	import SearchCard from '$lib/components/SearchCard.svelte';
	import WelcomeDashboard from '$lib/components/WelcomeDashboard.svelte';
</script>

<div class="flex space-y-28 flex-col items-center justify-center">
	<WelcomeDashboard></WelcomeDashboard>
	<SearchCard></SearchCard>
	<div class="py-16"></div>
</div>
