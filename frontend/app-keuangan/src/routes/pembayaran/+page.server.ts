import type { PembayaranModel } from '$lib/models/PembayaranModel';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        pembayaran: [
            { id: 1, jumlah: 100000, detailpembayaran: 'SPP', namabendahara: 'Bendahara 1', namasiswa: 'Siswa 1', idsiswa: 1, tglpembayaran: '2022-01-01' },
            { id: 2, jumlah: 200000, detailpembayaran: 'Pendaftaran', namabendahara: 'Bendahara 2', namasiswa: 'Siswa 2', idsiswa: 2, tglpembayaran: '2022-01-01' },
            { id: 3, jumlah: 300000, detailpembayaran: 'SPP', namabendahara: 'Bendahara 3', namasiswa: 'Siswa 3', idsiswa: 3, tglpembayaran: '2022-01-01' },
            { id: 4, jumlah: 400000, detailpembayaran: 'Pendaftaran', namabendahara: 'Bendahara 4', namasiswa: 'Siswa 4', idsiswa: 4, tglpembayaran: '2022-01-01' },
        ] as PembayaranModel[],
    };
}) satisfies PageServerLoad;

