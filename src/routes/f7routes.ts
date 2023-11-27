export default [
	{
		path: '/',
		asyncComponent: () => import('./+page.svelte'),
	},
	{
		path: '/about',
		asyncComponent: () => import('./blog/about/+page.svelte'),
	},
	// {
	// 	path: '/blog/:postID',
	// 	asyncComponent: () => import('./blog/[postID]'),
	// },
];
