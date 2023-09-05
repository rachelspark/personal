import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

export const prerender = true;

export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
