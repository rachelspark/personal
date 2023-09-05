<script>
    export let data;
</script>
  
<article class="layout-md">
    <h1 class="py-3">{ data.title }</h1>
    <p class="text-gray-500 mb-10">{data.date}</p>
    <svelte:component this={data.content} />
</article>