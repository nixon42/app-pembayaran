import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        siswa: [
            { id: 1, name: 'Siswa 1', namawali: 'Siswa 1', nohpwali: '123', nomorinduk: '123' },
            { id: 2, name: 'Siswa 2', namawali: 'Siswa 2', nohpwali: '123', nomorinduk: '123' },
            { id: 3, name: 'Siswa 3', namawali: 'Siswa 3', nohpwali: '123', nomorinduk: '123' },
            { id: 4, name: 'Siswa 4', namawali: 'Siswa 4', nohpwali: '123', nomorinduk: '123' },
            { id: 5, name: 'Siswa 5', namawali: 'Siswa 5', nohpwali: '123', nomorinduk: '123' },
            { id: 6, name: 'Siswa 6', namawali: 'Siswa 6', nohpwali: '123', nomorinduk: '123' },
        ]
    };
}) satisfies PageServerLoad;