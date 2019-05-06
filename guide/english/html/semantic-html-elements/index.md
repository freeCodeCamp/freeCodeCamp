---
title: Semantic HTML Elements
---

## Semantic HTML Elements

In HTML4, documents were organized by sections (`<div>` elements) with sub-sections (`<h1>`, `<h2>`, `<h3>`, etc.). With HTML5, released in October 2014, new element tags allow documents to be organized based on content.

Semantic HTML elements provide meaning to browsers, developers, and users of a site. In contrast to elements like `<div>` or `<span>`, which convey no information about their contents, semantic elements like `<header>` and `<footer>` more clearly indicate the purpose of each section of a website. Heading tags should still be used along with semantic tags.

### Why Use Semantic Elements?

Developers use semantic elements to improve the following:

* accessibility: help assistive technologies read and interpret your webpage
* searchability: help computers make sense of your content
* internationalization: help standardize web document structure for a global web
* interoperability: help other programmers understand the structure of your webpage <sup>1</sup>

### Common Semantic Elements

* `<header>` defines a header for the document or a section
* `<footer>` defines a footer for the document or a section
* `<nav>` defines navigation links in the document
* `<main>` defines the main content of a document
* `<section>` defines a section in the document—the spec defines this as “a thematic grouping of content, typically with a heading," so you can think of it as being like a chapter
* `<article>` defines an article in the document
* `<aside>` defines content aside from the page content
* `<address>` defines the contact information for the author/owner of a document or an article
* `<figure>` defines self-contained content, like illustrations, diagrams, photos, code blocks, etc. <sup>2</sup>
* `<figcaption>` defines the caption for a figure

### Lesser-known Semantic Elements

* `<bdi>` defines a section of text that might be formatted in a different direction from other text (for instance, a quote in Hebrew or Arabic in an otherwise-English article)
* `<blockquote>` defines an extended quotation, usually styled differently from the main text
* `<details>` defines additional details that people can view or hide (like a tooltip)
* `<dialog>` defines a dialog box or window
* `<mark>` defines marked or highlighted text
* `<menuitem>` defines a command/menu item that the user can select from a popup menu
* `<meter>` defines a scalar measurement within a known range (a gauge)
* `<progress>` defines the progress of a task
* `<rp>` defines what to show in browsers that do not support ruby annotations
* `<rt>` defines an explanation/pronunciation of characters (for East Asian typography)
* `<ruby>` defines a ruby annotation (for East Asian typography)
* `<summary>` defines a visible heading for a `<details>` element
* `<time>` defines a date/time
* `<wbr>` defines a word break opportunity, where the browser may add a line-break when necessary <sup>2</sup>

### Sources
1. [Lee, Michelle. "An Overview of HTML5 Semantics." *CodePen*. February 16, 2016. Accessed: October 24, 2017](https://codepen.io/mi-lee/post/an-overview-of-html5-semantics)
2. [Bidaux, Vincent. "HTML5 semantic elements and Webflow: the essential guide." *Webflow*. December 16, 2016. Accessed: October 24, 2017](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide)

#### More Information:
Refer to the [MDN Web Docs article](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines) about HTML sections and outlines.
For some history, this 2001 [article in Scientific American](https://www-sop.inria.fr/acacia/cours/essi2006/Scientific%20American_%20Feature%20Article_%20The%20Semantic%20Web_%20May%202001.pdf) about the semantic web was co-authored by Tim Berners-Lee, the inventor of the World Wide Web.
