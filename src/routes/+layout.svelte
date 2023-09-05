<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	// import Footer from '$lib/components/Footer.svelte';

	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
	const reducedMotion = browser && matchMedia('(prefers-reduced-motion: reduce)').matches;

	export let data;
</script>

<div class="flex flex-col h-screen justify-between {isMobile || reducedMotion ? 'body' : ''}">
	<div>
		<Header />
		{#if isMobile || reducedMotion}
			<!--
            Disabling page transitions on mobile and reduced-motion users.
        -->
			<main>
				<slot />
			</main>
		{:else}
			{#key data.currentRoute}
				<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
					<slot />
				</main>
			{/key}
		{/if}
	</div>
	<!-- <Footer/> -->
</div>

<style>
	.body {
		background: radial-gradient(circle 300px at 50vw 30vh, #d05bdd3b 5%, transparent 100%);
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
