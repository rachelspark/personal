---
title: How I built this website
description: Building a personal website and static blog using SvelteKit
date: 'Sep 5, 2023'
---

I’ve been meaning to start a blog for a while. I enjoy writing, and have wanted a place online to share some thoughts, especially on tech and all that. But having been dissatisfied with [Wordpress](https://wordpress.com/), [Wix](https://www.wix.com/), and all these no-code platforms in the past, and given the [fickleness](https://mashable.com/article/twitter-substack-blocked-embeds-interactions-on-tweets) of other content platforms like [Substack](https://substack.com/), I knew that making a lasting personal website with a blog meant building my own from scratch—which was a bit of a barrier to entry for a while.

So, how did I end up building this website in less than a day, and actually have fun doing it? 

[SvelteKit](https://kit.svelte.dev/).

I knew I wanted the simplest publishing workflow possible, meaning ideally I could just write in [Markdown](https://www.markdowntutorial.com/) and push to main to deploy. Most people online recommend static site generators like [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), or [Zola](https://www.getzola.org/) to get up and running quickly. Personally, I found these tools harder to use and less flexible than desired. Finding Josh Collinsworth’s [post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) on easily building a static Markdown blog with [Svelte](https://svelte.dev/) was the push I needed to finally build this blog, having fallen in love with Svelte at [Modal](https://modal.com/) these past couple months (we use Svelte for our web frontend). Svelte isn't the simplest to configure as a static site generator, but I think its overall developer/user experience and flexibility make it worth the setup.

Following Josh’s lead, I started by creating a skeleton SvelteKit app and adding [mdsvex](https://mdsvex.pngwn.io/) for Markdown capabilities. mdsvex is great because not only does it allow us to convert Markdown files as components (so we can use them as pages), but it also allows us to use Svelte components in Markdown files! The posts on this blog are all Markdown files rendered using dynamic routing, and are actually all pre-rendered in HTML via Svelte's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) to make things nice and snappy. I also built a server route endpoint to be able to fetch the Markdown post data in other places of the website, like the [Recent Posts](/) section of the home page.

To extend this, I added [Tailwind CSS](https://tailwindcss.com/) for easy styling, including dark mode functionality. I also used a couple YAML-to-JS plugins to be able to easily write and render a simple list of things in YAML, like I do with my [Projects](/projects) page.

All of this is deployed on [Vercel](https://vercel.com/) using the Github for Vercel integration, which deploys every push by default. So whenever I want to put out a blog post, I just write in a new Markdown file, drop any images into `/assets`, and push these changes to main.

The source code is available [here](https://github.com/rachelspark/personal) under [GPLv3](https://github.com/rachelspark/personal/blob/main/LICENSE). Feel free to poke around and use it to build your own website!