<!-- Header.svelte -->
<script>
	import { page } from '$app/stores';
</script>

<header class="layout-md flex flex-wrap justify-between text-lg py-8 align-start">
	<a class="text-2xl font-bold" href="/">Rachel Park</a>
	<nav class="flex text-neutral-800 dark:text-neutral-200 space-x-3 align-start">
		<a
			href="/writing"
			class="hover:text-black dark:hover:text-white"
			class:active={$page.route.id === '/writing'}>writing</a
		>
		<a
			href="/projects"
			class="hover:text-black dark:hover:text-white"
			class:active={$page.route.id === '/projects'}>projects</a
		>
		<a
			href="/"
			class="hover:text-black dark:hover:text-white"
			class:active={$page.route.id === '/about'}>about</a
		>
	</nav>
</header>

<style lang="postcss">
	a.active {
		@apply text-black dark:text-white;
	}
</style>
