import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const form = await request.formData();
        const username = form.get('username') as string;
        const password = form.get('password') as string;

        if (!username) {
            return { username: username, missing: true };
        }

        if (!password) {
            return {username: username, incorrect: true };
        }

        return {success: true}
    }
}