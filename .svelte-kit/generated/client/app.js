export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/recursos": [4],
		"/recursos/guia-de-profissoes": [5,[2]],
		"/recursos/guia-de-profissoes/areas-de-atuacao": [6,[2]],
		"/recursos/guia-de-profissoes/autoconhecimento": [7,[2]],
		"/recursos/guia-de-profissoes/mercado-de-trabalho": [8,[2]],
		"/suporte": [9]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';