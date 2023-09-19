<script>
    function handleSubmit() {
        window.open('https://buttondown.email/rachelpark', 'popupwindow');
    }
</script>

<div class="rounded bg-neutral-300/40 dark:bg-neutral-700/40 p-6 mt-16 mb-6 text-sm">
    <div class="text-neutral-800 dark:text-neutral-200 font-semibold">Let's keep in touch</div>
    <div class="py-4 text-neutral-600 dark:text-neutral-400">Every once in a while, I'll write about something I'm thinking about and post on this blog. I'd love to share it with you, too.</div>
    <form
    action="https://buttondown.email/api/emails/embed-subscribe/rachelpark"
    method="post"
    target="popupwindow"
    on:submit|preventDefault={handleSubmit}
    class="flex gap-2 items-center"
    >
    <input type="hidden" value="1" name="embed" class="hidden"/>
    <div class="grow">
        <div class="relative rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
            </div>
            <input type="email" name="email" id="bd-email" class="block bg-neutral-300/75 dark:text-white dark:bg-neutral-800 transition-all w-full rounded-md border-0 py-1.5 pl-10 text-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600  sm:text-sm sm:leading-6" placeholder="you@example.com">
        </div>
    </div>
    <button class="rounded-md px-3 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 dark:hover:text-white outline-1 outline-neutral-500 bg-neutral-300/80 dark:bg-neutral-700/80 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:text-neutral-800 shadow-sm outline-natural-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all focus-visible:outline-urge-600 h-full" type="submit">Subscribe</button>
    </form>
</div>