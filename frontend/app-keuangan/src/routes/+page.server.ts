import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    
};

export const actions: Actions = {
    logout: async () => {
        return {
            success: true
        }
    }
};