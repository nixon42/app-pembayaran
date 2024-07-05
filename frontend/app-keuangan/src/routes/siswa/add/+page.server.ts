import type { Actions, PageServerLoad } from './$types';
import type { Siswa } from '$lib/models/SiswaModel';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    add: async ({ request, locals }) => {
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
    }
};