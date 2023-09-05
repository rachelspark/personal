<script lang="ts">
    import { ArrowRightIcon } from 'lucide-svelte';
    import MouseCursor from '$lib/components/MouseCursor.svelte';

    import { browser } from "$app/environment";

    const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
    const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    export let data
</script>

{#if !isMobile && !reducedMotion}
    <MouseCursor />
{/if}
<div class="layout-md">
    <div class="text-lg space-y-4 mt-8 mb-16">
        <p>Hi! I'm Rachel Park.
        <p>I’m a Stanford student working on the future of cloud computing at <a class="link" target="_blank" href="https://modal.com/">Modal</a>.</p>
        <p>I like building products that help people build, create, and collaborate. Prior to Modal, I straddled product growth and engineering at <a class="link" target="_blank" href="https://www.warp.dev/">Warp</a> and <a class="link" target="_blank" href="https://get.mem.ai/"> Mem</a>.</p>
        <p>In my free time, I enjoy the outdoors, iced coffee, memoirs, and volleyball.</p>
        <p>I'd love to hear from you: <a href="mailto:rachpark@stanford.edu">rachpark [at] stanford [dot] edu</a> or rachelsupark on <a class="link" target="_blank" href="https://twitter.com/rachelsupark/">Twitter</a> and <a class="link" target="_blank" href="https://www.linkedin.com/in/rachelsupark/">LinkedIn</a>.</p>
    </div>
    <div class="text-lg">
        <a href="/writing" class="text-xl font-bold py-4 ">Recent Posts <ArrowRightIcon class="inline-block text-neutral-600 hover:text-[#790E7B]" size={16}/></a>
            
        <ul class="text-lg text-gray-500 mt-4">
            {#each data.posts as post}
            <li>
                <a class="link text-black" href={post.path}>
                    {post.meta.title}
                </a> -
                {post.meta.date}
            </li>
            {/each}
        </ul>
    </div>
</div>
