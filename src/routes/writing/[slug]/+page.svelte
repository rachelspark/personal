<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const article = document.querySelector('article');
		const links = article?.querySelectorAll('a');

		links?.forEach((link) => {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
		});
	});

	export let data;
</script>

<article class="layout-md">
	<h1 class="py-3">{data.title}</h1>
	<p class="text-gray-500 mb-10">{data.date}</p>
	<svelte:component this={data.content} />
</article>

<style lang="postcss">
	article {
		@apply text-base pb-6;
	}
	article :global(h1) {
		@apply text-4xl font-bold leading-tight tracking-tight pt-10 pb-4;
	}
	article :global(h2) {
		@apply text-2xl font-bold leading-snug pt-9 pb-3;
	}
	article :global(h3) {
		@apply text-xl font-bold leading-snug pt-4 pb-3;
	}
	article :global(:not(h1, h2, h3, h4) > code) {
		@apply text-sm;
	}
	article :global(:not(pre) > code) {
		@apply bg-white/5 border border-zinc-700 rounded py-0.5 px-1;
	}
	article :global(a) {
		@apply underline underline-offset-[2px] dark:text-neutral-300 decoration-neutral-300 dark:decoration-neutral-500;
		@apply dark:hover:text-white transition-colors;
		@apply dark:hover:decoration-white;
	}
	article :global(p) {
		@apply mt-2 mb-4;
	}
	article :global(strong) {
		@apply font-bold;
	}
	article :global(hr) {
		@apply w-2/3 mx-auto my-6 border-zinc-700;
	}
	article :global(ul) {
		@apply pl-7 mb-4 list-disc;
	}
	article :global(ul li)::marker {
		@apply text-zinc-800;
	}
	article :global(ol) {
		@apply pl-7 mb-4 list-decimal;
	}
	article :global(ol li)::marker {
		@apply text-zinc-800;
	}
	article :global(li) {
		@apply pl-1.5 mb-2;
	}
	article :global(blockquote) {
		@apply border-l-4 border-zinc-800 px-4 py-1;
	}
	article :global(blockquote > p) {
		@apply leading-relaxed;
	}
	article :global(img) {
		@apply max-w-full h-auto pt-7;
	}
</style>
