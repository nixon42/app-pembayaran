import type { Siswa } from '$lib/models/SiswaModel';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    edit: async ({ request, params }) => {
        const form = await request.formData();
        const name = form.get('name') as string;
        const namawali = form.get('namawali') as string;
        const nohpwali = form.get('nohpwali') as string;
        const nomorinduk = form.get('nomorinduk') as string;
        const siswa: Siswa = { id: 0, name, namawali, nohpwali, nomorinduk };
        return {
            success: true,
            siswa: siswa,
        }
    },
    delete: async ({ params }) => {
        return {
            success: true
        }
    }
}