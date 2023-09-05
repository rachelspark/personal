<script lang="ts">
    type Project = {
      title: string;
      date: Date;
      tagList: string
      tags: string[];
      description: string;
      content: string;
      repo: string;
      link: string;
      img: string;
    };
  
    export let data: Project[];
  
    // Split the tags string by the delimiter ',' to render each array item as a tag
    $: data = data.map(item => ({...item, tags: item.tagList.split(',')}));
  </script>
  
  <div class="grid gap-y-4">
    {#each data as item}
      <div
        class="grid grid-cols-3 gap-4 -mx-3 px-3 py-2"
      >
      <div class="col-span-3 md:col-span-1">
        <div class="relative group cursor-pointer">
          <div
              class="absolute -inset-1 bg-gradient-to-r from-violet-300 to-[#78328C] rounded-lg blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-70 transition duration-1000 group-hover:duration-200">
          </div>
          <div
              class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div class="space-y-2">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.img} alt={item.title}
                  />
                </a>
              </div>
          </div>
        </div>
    </div>
        <div class="ml-4 mt-2 col-span-2">
          <div class="flex flex-col mb-4">
              <div class="text-md font-semibold text-black dark:text-white mr-2">
                {item.title}
              </div>
              <p class="whitespace-nowrap text-neutral-400 text-base font-normal">{item.date}</p>
            </div> 
            <div class="flex flex-wrap">
              {#each item.tags as tag}
                <div class="pill">{tag}</div>
              {/each}
            </div>  
            <p class="justify-items-end text-md font-light my-2">{item.description}</p>
            <a href={item.repo} class="link text-xs mr-2" target="_blank" rel="noreferrer">
                Github
            </a>
            <a href={item.link} class="link text-xs" target="_blank" rel="noreferrer">
              Website
          </a>
          </div>  
        
    </div>
    {/each}        
</div>

<style lang="postcss">
  .pill {
    @apply flex items-center text-xs font-medium;
    @apply px-1.5 py-[2px] mr-1.5 mb-2 bg-neutral-100 dark:bg-neutral-700 rounded-full;
  }
</style>