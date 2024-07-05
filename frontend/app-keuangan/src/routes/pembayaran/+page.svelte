<script lang="ts">
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    
    export let data: PageData;
    let pembayaran = data.pembayaran;
    let paginationSettings = {
		page: 0,
		limit: 5,
		size: pembayaran.length,
		amounts: [5, 10, 20, 50]
	} satisfies PaginationSettings;

    $: paginatedPembayaran = pembayaran.slice(
	paginationSettings.page * paginationSettings.limit,
	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
    );
</script>

<div class="flex h-full w-full items-center justify-center">
    <div class="m-4 space-y-4">
        <div class="flex flex-row space-x-4 justify-end">
            <a href="/pembayaran/add" class="btn variant-filled-primary">Tambah Pembayaran</a>
        </div>
        <div class="table-container">
            <!-- Native Table Element -->
			<table class="table table-interactive table-compact">
				<thead>
					<tr>
						<th>No</th>
						<th>Jumlah</th>
						<th>Detail</th>
						<th>Bendahara</th>
						<th>Siswa</th>
                        <th>Tanggal</th>
					</tr>
				</thead>
				<tbody>
					{#each paginatedPembayaran as row, i}
						<tr on:click={() => (window.location.href = `/pembayaran/edit/${row.id}`)}>
							<td>{i + 1}</td>
                            <td>{row.jumlah}</td>
                            <td>{row.detailpembayaran}</td>
                            <td>{row.namabendahara}</td>
                            <td>{row.namasiswa}</td>
                            <td>{row.tglpembayaran}</td>
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