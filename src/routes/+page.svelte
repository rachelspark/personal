<script lang="ts">
    import MouseCursor from '$lib/components/MouseCursor.svelte';
    export let data
</script>

<MouseCursor />
<div class="layout-md">
    <div class="text-lg space-y-4 mt-8 mb-16">
        <p>Hi! I'm Rachel Park. </p>
        <p>I’m a Stanford student working on the future of cloud computing at <a class="link" target="_blank" href="https://modal.com/">Modal</a>.</p>
        <p>I like building products that help people build, create, and collaborate. Prior to Modal, I straddled product growth and engineering at <a class="link" target="_blank" href="https://www.warp.dev/">Warp</a> and <a class="link" target="_blank" href="https://get.mem.ai/"> Mem</a>.</p>
        <p>In my free time, I enjoy the outdoors, iced coffee, memoirs, and volleyball.</p>
    </div>
    <div class="text-lg">
        <h2 class="pt-4">Recent Posts</h2>
        <ul class="text-lg text-gray-500">
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
