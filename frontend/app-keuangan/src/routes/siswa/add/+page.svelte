<script lang="ts">
	import type { ActionData } from './$types';
	import type { PageData } from './$types';

	export let data: PageData;
	export let actionData: ActionData;
</script>

<div class="flex h-full w-full flex-col justify-center items-center">
	<div class="card w-1/2">
		<div class="card-header">
            <h3 class="h3">Tambah Siswa</h3>
        </div>
		<section class="p-4">
			<form class="space-y-4" action="?/add" method="post">
				<label class="label">
					<span>Nomor Induk Siswa</span>
					<input
						class="input"
						title="Nomor Induk"
						name="nomorinduk"
						type="text"
						placeholder="Nomor Induk"
						required
					/>
				</label>
				<label class="label">
					<span>Nama</span>
					<input class="input" title="Nama" name="name" type="text" placeholder="Nama" required />
				</label>
				<label class="label">
					<span>Nama Wali</span>
					<input
						class="input"
						title="Nama Wali"
						name="namawali"
						type="text"
						placeholder="Nama Wali"
						required
					/>
				</label>
				<label class="label">
					<span>No Handphone Wali</span>
					<input
						class="input"
						title="No Handphone Wali"
						name="nohpwali"
						type="text"
						placeholder="No Handphone Wali"
						required
					/>
				</label>
				<button type="submit" class="btn variant-filled-primary">Tambahkan</button>
			</form>
		</section>
		<footer class="clard-footer"></footer>
	</div>
</div>
