---
title: Link to Internal Sections of a Page with Anchor Elements
---
## Link to Internal Sections of a Page with Anchor Elements

As stated in the instructions the internal link is composed of two elements: the `a` tag and the html element with the `id` used in the `href` attribute of the `a` tag.

All of these are valid internal links:
 
ANCHOR TAG | BRINGS TO
----- | ------
`<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>`
`<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>`
`<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>`
`<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

You are asked to use the existent anchor element to create your internal link, so do not write another anchor tag.

To transform the actual anchor tag is not the only thing the challenge wants you to do though, there are two more points:
 - To remove the `target` attribute of the `a` tag: you don't want anymore to open a new tab in your browser, it's the actual page that will 'move' up/down.
  - To modify the text content of the `a` tag: from `cat photos` to `Jump to Bottom`(double check capitalization).
  
  Good luck!
