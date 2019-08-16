---
title: Static Site Generators
---

## Static web page
Static web pages are often HTML documents stored as files in the file system and made available by the web server over HTTP (nevertheless URLs ending with ".html" are not always static). However, loose interpretations of the term could include web pages stored in a database, and could even include pages formatted using a template and served through an application server, as long as the page served is unchanging and presented essentially as stored.

Static web pages are suitable for the contents that never or rarely need to be updated, though modern static site generators are changing. Maintaining large numbers of static pages as files can be impractical without automated tools, such as Static site generators described in the Web template system. Another way to manage static pages include Online compiled source code playgrounds, e.g. GatsbyJS and GitHub may be utilized for migrating a WordPress site into static web pages. Any personalization or interactivity has to run client-side, which is restricting.

## Static Site Generators
A Static Site Generator is a program, that generates an HTML website as an output. This HTML website is then served through your web server, just like the olden days. This is usually achieved using template languages and code that separates out the layout of the website from its content and styles.

## How static sites work
The proposition of a static site is to shift the heavy load from the moment visitors request the content to the moment content actually changes. Going back to our news kiosk metaphor, think of a scenario where it's the news agencies who call the kiosk whenever something newsworthy happens.

The kiosk operators and scribbles will then compile, format and style the stories and produce a finished newspaper right away, even though nobody ordered one yet. They will print out a huge number of copies (infinite, actually) and pile them up by the storefront.

When customers arrive, there's no need to wait for an operator to become available, place the phone call, pass the results to the scribble and wait for the final product. The newspaper is already there, waiting in a pile, so the customer can be served instantly.

And that is how static site generators work. They take the content, typically stored in flat files rather than databases, apply it against layouts or templates and generate a structure of purely static HTML files that are ready to be delivered to the users.

## Advantages of static
1) Speed
Perhaps the most immediately noticeable characteristic of a static site is how fast it is. As mentioned above, there are no database queries to run, no templating and no processing whatsoever on every request.

Web servers are really good at delivering static pages quickly, and the entire site consists of static HTML files that are sitting on the server, waiting to be served, so a request is served back to the user pretty much instantly.

2) Version control for content
You can't even imagine working on a project without version control anymore, can you? Having a repository where people can collaboratively work on files, control exactly who does what and rollback changes when something goes wrong is essential in any software project, no matter how small.

But what about the content? That's the keystone of any site and yet it usually sits in a database somewhere else, completely separated from the codebase and its version control system. In a static site, the content is typically stored in flat files and treated as any other component of the codebase. In a blog, for example, that means being able to have the actual posts stored in a GitHub repository and allowing your readers to file an issue when something is wrong or to add a correction with a pull request — how cool is that?

3) Security
Platforms like WordPress are used by millions of people around the world, meaning they're common targets for hackers and malicious attacks — no way around it. Wherever there's user input/authentication or multiple processes running code on every request, there's a potential security hole to exploit. To be on top of the situation, site administrators need to keep patching their systems with security updates, constantly playing cat and mouse with attackers, a routine that may be overlooked by less experienced users.

Static sites keep it simple since there's not much to mess up when there's only a web server serving plain HTML pages.

4) Less hassle with the server
Installing and maintaining the infrastructure required to run a dynamic site can be quite challenging, especially when multiple servers are involved or when something needs to be migrated. There's packages, libraries, modules and frameworks with different versions and dependencies, there are different web servers and database engines in different operating systems.

Sure, a static site generator is a software package with its dependencies as well, but that's only relevant at build time when the site is generated. Ultimately, the end result is a collection of HTML files that can be served anywhere, scaled and migrated as needed regardless of the server-side technologies. As for the site generation process, that can be done from an environment that you control locally and not necessarily on the web server that will run the site — heck, you can build an entire site on your laptop and push the result to the web when it's done.

5) Traffic surges
Unexpected traffic peaks on a website can be a problem, especially when it relies intensively on database calls or heavy processing. Introducing caching layers such as Varnish or Memcached surely helps, but that ends up introducing more possible points of failure in the system.

A static site is generally better prepared for those situations, as serving static HTML pages consumes a very small amount of server resources.

## Disadvantages of static (and potential solutions)
1) No real-time content
With a static site, you lose the ability to have real-time data, such as indication about which stories have been trending for the past hour, or content that dynamically changes for each visitor, like a "recommended articles for you" kind of thing. Static is static and will be the same for everyone.

There's not really a solution for this, I'm afraid. It's the ultimate price to pay for using a static site, so it's important that you ask yourself the question "how real-time does my site need to be?" — if its concept is based around delivering real-time information then perhaps a static site isn't the right choice.

A dangerous solution: There's an easy exit for whenever you're faced with the challenge of dynamically updating content on a static site: "I can do it with JavaScript". Doing processing on the client-side and appending the results to the page after it's been served can be the right approach for some cases, but must not be seen as the magic solution that turns your static site into a fully dynamic one. It can prevent some users from seeing the injected content, hurt your SEO and introduce other problems, potentially taking away the ease of mind and sense of control that comes with using a static site.

2) No user input
Adding user-generated content to a static site is a bit of a challenge. Take a commenting system for a blog, for example — how do you process user comments and append them to a post using just plain HTML pages? You don't.
