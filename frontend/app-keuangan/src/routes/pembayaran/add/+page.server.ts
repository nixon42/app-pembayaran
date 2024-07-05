import type { PembayaranModel } from '$lib/models/PembayaranModel';
import type { Siswa } from '$lib/models/SiswaModel';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default : async ({ request, locals }) => {
        const form = await request.formData();
        let jumlah = form.get('jumlah') as unknown as number;
        let detailpembayaran = form.get('detailpembayaran') as string;
        let siswa = form.get('siswa') as string;
        let bendahara = form.get('bendahara') as string;
        let tglpembayaran = form.get('tglpembayaran') as string;
        
        let pembayaran:PembayaranModel = {
            id: 0,
            jumlah: ,
            detailpembayaran: '',
            namabendahara: '',
            namasiswa: '',
            idsiswa: 0,
            tglpembayaran: ''
        }
        return {
            success: true
        }
    }
};