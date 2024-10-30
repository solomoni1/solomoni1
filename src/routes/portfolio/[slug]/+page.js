import { error } from '@sveltejs/kit';
import { portfolios } from '$lib/index.js';

export function load({ params }) {
	const portfolio = portfolios.find((portfolio) => portfolio.slug === params.slug);
	console.log(portfolio, params);

	if (!portfolio) error(404);

	return {
		portfolio
	};
}
