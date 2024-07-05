<script lang="ts">
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	let siswa = data.siswa;

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: siswa.length,
		amounts: [5, 10, 20, 50]
	} satisfies PaginationSettings;

	$: paginatedSiswa = siswa.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
</script>

<!-- Responsive Container (recommended) -->
<div class="flex h-full w-full flex-col items-center">
	<div class="m-4 space-y-4">
		<div class="flex flex-row space-x-4 justify-end">
			<a href="/siswa/add" class="btn variant-filled-primary">Tambah Siswa</a>
		</div>
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-interactive table-compact">
				<thead>
					<tr>
						<th>No</th>
						<th>No Induk</th>
						<th>Nama</th>
						<th>Nama Wali</th>
						<th>No Handphone Wali</th>
					</tr>
				</thead>
				<tbody>
					{#each paginatedSiswa as row, i}
						<tr on:click={() => (window.location.href = `/siswa/edit/${row.id}`)}>
							<td>{i + 1}</td>
							<td>{row.nomorinduk}</td>
							<td>{row.name}</td>
							<td>{row.namawali}</td>
							<td>{row.nohpwali}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot></tfoot>
			</table>
		</div>

		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={false}
			showPreviousNextButtons={false}
			showNumerals
			maxNumerals={1}
		/>
	</div>
</div>
