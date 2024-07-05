import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/custom')) { 
        return new Response('custom response'); 
    }
    const response = await resolve(event); 

    return response;
};

import type { HandleFetch } from '@sveltejs/kit';
export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
    if (request.url.startsWith('http://localhost:8000/')) {
        request.headers.set('cookie', event.request.headers.get('cookie')|| '')
    };
    return fetch(request);
};
