---
title: My summer at Modal
description: A recap of my summer building at Modal
date: 'Sep 19, 2023'
---

## Background
Almost exactly a year ago, a few weeks before the start of my sophomore year, I started building [Stanford Goose](https://stanfordgoose.com/), and reached out to [Eric Zhang](https://www.ekzhang.com/). He had just built [classes.wtf](https://classes.wtf/) for Harvard, and I wanted to port some of his code to build a similar search engine for Stanford’s courses. As we chatted, Eric mentioned that he had just wrapped up a stint an NYC-based startup in the infra space. 

I soon learned that the startup Eric had joined was [Modal](https://modal.com/).

Modal is an end-to-end compute platform that lets you run things in the cloud without having to think about infrastructure. This means that you can easily run model inference, batch jobs, task queues, web apps, and more within seconds, with just a few lines of code. Using Modal, running code in the cloud feels like you're developing locally. As it should.

Building more of my own projects and playing around with foundation models, I could point to my own understanding of some of the pain points that Modal was solving. After meeting [Erik](https://erikbern.com/) and [Akshat](https://www.linkedin.com/in/akshat-bubna-188885103/), I found myself drawn to their vision and wanting to learn more.

I’d worked for a couple small, early-stage startups in the past, but both [Warp](https://www.warp.dev/) and [Mem](https://get.mem.ai/) were pre-revenue and slightly bigger (around 15 people) when I joined. What stood out to me about Modal was its talent density and early traction. The team was less than 10 people—all engineers (with many [IOI](https://en.wikipedia.org/wiki/International_Olympiad_in_Informatics) medals across the board)—but already profitable and making waves in the infra space. Erik and Akshat both had extensive experience leading technical teams at [Better](https://better.com/) (recently $BETR) and [Scale](https://scale.com/), respectively. I was excited about the opportunity to work so closely with such talented engineers, hop on some sales calls, and learn what great technical leadership looks like. Plus, I wanted to dive head-first into the AI space, and what better way to do that than from the compute layer?

## What I Did

My first project was building a cool Modal example. A few users had been wondering how to build a [Discord](https://discord.com/) bot, and some others had been asking how to best deploy Meta's [MusicGen](https://audiocraft.metademolab.com/musicgen.html) model with Modal. I decided it would be fun to combine these asks, and ended up building [Boombot](https://github.com/modal-labs/boombot): a Midjourney-inspired Discord bot that lets you generate custom music samples in seconds. You can try it out yourself by joining the Discord server [here](https://discord.com/invite/bBZPgqk9By).
![boombot-demo](/assets/blog/modal-boombot-demo.gif)

I then moved onto my main project: building out and shipping Modal's self-serve business plan. This involved everything on the user-facing side from wrangling Stripe Billing to extending observability in our client library to bolstering our notification system. 

I also helped bring [custom domains](https://modal.com/docs/guide/webhooks#custom-domains), a new premium feature, to users.
![custom-domains](/assets/blog/modal-custom-domains.png)

At the same time, I ended up going back to my community/growth roots and rolling up my sleeves to rev up Modal's community engine. We hosted our first community meet-up and hackathon in NYC this summer. Both exceeded venue capacity (shh...) and some people even flew out from Boston and Austin for the day to make it to our hackathon, which made my heart swell.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">first <a href="https://twitter.com/modal_labs?ref_src=twsrc%5Etfw">@modal_labs</a> meetup in the books! <br><br>great discussion with <a href="https://twitter.com/bernhardsson?ref_src=twsrc%5Etfw">@bernhardsson</a> and <a href="https://twitter.com/thesephist?ref_src=twsrc%5Etfw">@thesephist</a> on paradigm shifts in tech, what makes great FOSS, and what the next few years of AI might look like (+ a couple tales from early spotify) <br><br>thanks to everyone who joined us! <a href="https://t.co/6n3gE1l8pm">pic.twitter.com/6n3gE1l8pm</a></p>&mdash; Rachel Park (@rachelsupark) <a href="https://twitter.com/rachelsupark/status/1684953375228506112?ref_src=twsrc%5Etfw">July 28, 2023</a></blockquote>

#

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Successful NYC AI hackathon in the books! 100 hackers came together to ship code that brought some of their most ambitious ideas to reality.<br><br>Sharing our overall winning projects… <a href="https://t.co/T14lV5tgNi">pic.twitter.com/T14lV5tgNi</a></p>&mdash; Modal Labs (@modal_labs) <a href="https://twitter.com/modal_labs/status/1696186080939143351?ref_src=twsrc%5Etfw">August 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#


## Some Things I Learned

### AI is an exciting space with huge opportunity

AI is having a moment. Everyone, from the biggest incumbents to the scrappiest startups, is racing to bake custom models into their products. Modal enables developers to quickly make models useful with easy training/tuning and inference. The last mile of product UX will really determine how these AI-first products will change our lives over the next several years, but seeing what people are already building at 10x speed using Modal makes me super excited for what's to come. 

### Developer experience is a competitive advantage

I spent a lot of my time this summer combing through docs and working with APIs. Trying to wrangle [Stripe](https://stripe.com/)'s products to build a subscription-based business model with multiple tiers (which is... that of many SaaS companies), and being forced to build a lot of custom logic due to the products' incompleteness and rigidity, I found myself questioning why and how Stripe became the go-to platform for online payment processing. I realized that more than the product itself, Stripe's differentiation and value lies in its developer experience. The docs are beautiful, the SDK is simple and easy to use, there's a trustworthy brand behind the product, etc. and that's why we decided to stick with Stripe despite the product's shortcomings. We also decided to use [Knock](https://knock.app/) as our notification infrastructure platform mainly because its excellent documentation.

All this has proven to me that developer experience is core to creating a winning developer-first company. Over the past couple months, I've seen how Modal holds a standard of excellence when it comes to devex (Erik even wrote a whole [blog post](https://erikbern.com/2020/10/06/developer-experience-as-a-competitive-advantage) about this a couple years ago). Every product decision is met with the question of how can we make this faster, simpler, and easier to use? While this may all seem initially tedious, I've come to believe that an unparalleled developer experience will be Modal's winning advantage.

### Stay unwaveringly dedicated to users

We've all heard the age-old startup adage to [make what people want](https://news.ycombinator.com/item?id=21947974#:~:text=make%20bad%20business-,%3E%20Make%20something%20people%20want.,some%20money%20off%20of%20it.), and to do so by staying close to users. 

Never have I seen founders as committed to their users as Erik and Akshat, and it pay off so well (though this might also be a function of Modal being a bit earlier in the company journey than the others I've worked for). Peek into the Modal beta user Slack right now and you'll see them personally answering users' questions within minutes. Even during our team offsite in Sweden, we'd pull out our laptops at restaurants and excursions to make sure user reports were handled. I saw Akshat build a whole new product interface, [Dynamic Sandboxes](https://modal.com/docs/guide/sandbox#dynamic-sandboxes-beta), in less than a week because he noticed off-hand that a few users were looking to run untrusted code in an isolated environment (i.e. all those codegen companies that rampaged the YC S23 batch). My first role at Mem was in user success, so I know how valuable it is to learn directly from users, but also how exhausting it can be to constantly context switch and balance user support with everything else. Erik and Akshat have deepened my belief that this kind of obsession is worth it, even if it [doesn't scale](http://paulgraham.com/ds.html). It's what drives product-market fit early on, not only because you can win over customers one-by-one, but because you're able to decipher what people actually want in the first place and make sure you're delivering it. And that's what really matters.

## What’s Next
The AI application layer is still really early, with many people comparing the wave of novelty apps we’ve seen in the past year to the early days of mobile. I wasn’t really sentient back then, but I can imagine how the beer-drinking, piano-playing apps that first came out on the App Store could be analogous to the headshot-generating, copilot-esque apps all over Twitter/X today. 

It’s challenging to predict exactly what AI-native products with enduring value will look like as they emerge over the next several years, but what we do know now is that building these products will require a new AI-first developer stack. Soon enough, every application engineer is going to be an [AI engineer](https://www.latent.space/p/ai-engineer). This shift, coupled with the overall [rise of the developer](https://www.linkedin.com/pulse/20140114172642-131990-the-rise-of-the-developer-and-its-implications/), means there clearly exists a huge opportunity for companies that make AI/ML workflows simpler and more efficient.

The AI infrastructure space is already getting pretty crowded, but I think the scale of [Erik’s vision](https://erikbern.com/2022/12/07/what-ive-been-working-on-modal) for Modal as a general purpose PaaS stands out. I believe that this vision, along with the team’s dedication to creating an amazing developer experience (by building many of the very low-level things from scratch), will help Modal weather the market and build a sustainable competitive advantage that grows with the inevitable bulk of cloud development yet to come.

I also think there’s something beautiful about lowering the barrier to development and making the cloud easy to use. The next generation of developers will build applications more powerful and magical than we could have ever imagined, and won’t have to wrangle Kubernetes, Docker, or even AWS to do so. Modal enables them to download, fine-tune, and deploy huge models in minutes instead of weeks, with just a few lines of code. This is what the future of development looks like, and from the time I’ve spent with the team so far, I know that they’re just getting started.

This developing thesis, combined with my deepened conviction in Erik and Akshat’s leadership and the star-power they’ve assembled, is why I’m excited to be continuing at Modal as I go back to college. It's been an awesome journey so far, and I'm looking forward to what the future holds!
![modal-team-sweden-offsite](/assets/blog/modal-team-pic-sweden.png)

If you have any questions about the product, or are interested in learning more about Modal in general, don’t hesitate to [say hi](mailto:rachpark@stanford.edu)!

