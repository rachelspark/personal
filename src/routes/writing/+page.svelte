<script>
    export let data
</script>

<div class="layout-md">
    <h1 class="mt-4 mb-8">Posts</h1>
    
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
