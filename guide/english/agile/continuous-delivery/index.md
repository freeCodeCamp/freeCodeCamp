---
title: Continuous Delivery
---
## Continuous Delivery

Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time.<sup><a href='https://en.wikipedia.org/wiki/Extreme_programming' target='_blank' rel='nofollow'>1</a></sup>

It aims at building, testing, and releasing software faster and more frequently. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery. Continuous delivery means that the team ensures every change can be deployed to production but may choose not to do it, usually due to business reasons.

### The myth

It is often assumed that if we want to deploy software more frequently, we must accept _lower levels of stability and reliability_ in our systems.
As a matter of fact, peer-reviewed research shows that this is not the case—high performance teams consistently deliver services faster and more reliably than their low performing competition. This capability provides an incredible competitive advantage for organizations, at ultimately a lower cost in efforts.

### The benefits

The practices at the heart of **CD** will help you achieve a few very important benefits:

* **Low Risk releases.** The primary goal of continuous delivery is to make releases/deployments to production much painless, low-risk events that can be performed at any given time, on demand. By applying certain patterns, it is relatively straightforward to achieve zero-downtime deployments that are undetectable to users.

* **Faster time to market.** When teams work togetherto automate the build and deployment. environment provisioning, and regression testign processes, developers can incorporate integration and regression testing into their daily work and completely remove these phases. Therefore, large amounts of re-work that plague the phased approach can be avoided.

* **Higher quality.** When developers have automated tools that discover regressions within minutes, teams are freed to focus their effort on user research and higher level testing activities such as exploratory testing, usability testing, and performance and security testing. These activities can be performed continuously throughout the delivery process, ensuring quality in to products and services from the beginning.

* **Lower costs.** Anys successful software product or service will evolve significantly over the course of its lifetime. By investing in build, test, deployment and environment automation, the cost of making and delivering incremental changes to the software is substantially reduced, since the fixed costs associated with the release process are eliminated.

* **Better products.** CD makes it economic to work in small batches. This means the product gets feedback from users throughout the delivery lifecycle based on working software. The ideas for the software can be tested by users before building the whole features, thanks to certain techniques such as _A/B Testing_. This way, we can get features that don't bring any zero or negative value to the businesses.

* **Happier teams.** As mentioned before, CD makes releases less painful and, therefore, reduces team burnout. Furthermore, when the team releases more frequently, software delivery teams can engage more actively with users, learn which ideas work and which don't (see point above), and see first-hand the outcomes of the work they have done. By removing the low-value painful activities associated with software delivery, the team can focus on what we care about more - ***continuously delighting the users.***

While **CD** may not be right for every company, Continuous Delivery is an absolute requirement of **DevOps practices**. Only when you continuously deliver your code can you have true confidence that your changes will be serving value to your customers within minutes of pushing the "go" button, and that you can actually push that button any time the business is ready for it.

If this sounds too good to be true, bear in mind: ***Continuous Delivery is not magic***. It’s about continuous, daily improvement—the constant discipline of pursuing higher performance by following the heuristic

> **If it hurts, do it more often, and bring the pain forward.**
