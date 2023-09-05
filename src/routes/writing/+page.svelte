<script>
    export let data
</script>

<div class="layout-md">
    <h1>Writing</h1>
    
    <ul>
        {#each data.posts as post}
        <li>
            <h2>
            <a href={post.path}>
                {post.meta.title}
            </a>
            </h2>
            {post.meta.date}
        </li>
        {/each}
    </ul>
</div>
