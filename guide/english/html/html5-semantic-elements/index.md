---
title: HTML5 Semantic Elements
---
## HTML5 Semantic Elements
Semantic HTML elements clearly describe its meaning in a human and machine readable way. Elements such as `<header>`, `<footer>` and `<article>` are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.


### A Quick History
HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed. Where the internet was originally inteded for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer. Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the ```<table></table>``` to describe information using a table, programmers would use them to position other elements on a page. As the use of visually designed layouts progressed, programmers started to use a generic "non-semantic" tag like `<div>`. They would often give these elements a `class` or `id` attribute to describe their purpose. For example, instead of `<header>` this was often written as `<div class="header">`. As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.

#### List of new semantic elements
The semantic elements added in HTML5 are:
+ `<article>`
+ `<aside>`
+ `<details>`
+ `<figcaption>`
+ `<figure>`
+ `<footer>`
+ `<header>`
+ `<main>`
+ `<mark>`
+ `<nav>`
+ `<section>`
+ `<summary>`
+ `<time>`

Elements such as ```<header>```, ```<nav>```, ```<section>```, ```<article>```, ```<aside>```, and ```<footer>``` act more or less like ```<div>``` elements. They group other elements together into page sections. However where a ```<div>```  tag could contain any type of information, it is easy to identify what sort of information would go in a semantic ```<header>``` region.

**An example of semantic element layout by w3schools**

![Semantic elements laying out a page by w3schools](https://www.w3schools.com/html/img_sem_elements.gif)

### Benefits of semantic elements
To look at the benefits of semantic elements, here are two pieces of HTML code. This first block of code uses semantic elements:
```
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```

Whilst this second block of code uses non-semantic elements:
```
<div id="header"></div>
<div class="section">
	<div class="article">
		<div class="figure">
			<img>
			<div class="figcaption"></div>
		</div>
	</div>
</div>
<div id="footer"></div>
```

First, it is  much **easier to read**. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.

It has **greater accessibility**. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users.

Overall, semantic elements also lead to more **consistent code**. When creating a header using non-semantic elements, different programmers might write this as `<div class="header">`, `<div id="header">`, `<div class="head">`, or simply `<div>`. There are so many ways that you can create a header element, and they all depend on the personal preference of the programmer. By creating a standard semantic element, it makes it easier for everyone.

Since October 2014, HTML4 got upgraded to HTML5, along with some new “semantic” elements.  To this day, some of us might still be confused as to why so many different elements that doesn’t seem to show any major changes.

#### <code>&#60;section&#62;</code> and <code>&#60;article&#62;</code>
“What’s the difference?”, you may ask.  Both these elements are used for sectioning a content, and yes, they can definitely be used interchangeably.  It’s a matter of in which situation.  HTML4 offered only one type of container element, which is <code>&#60;div&#62;</code>.  While this is still used in HTML5, HTML5 provided us with <code>&#60;section&#62;</code> and <code>&#60;article&#62;</code> in a way to replace <code>&#60;div&#62;</code>.
  
The <code>&#60;section&#62;</code> and <code>&#60;article&#62;</code> elements are conceptually similar and interchangeable.  To decide which of these you should choose, take note of the following:
  
  1. An article is intended to be independently distributable or reusable.
  2. A section is a thematic grouping of content.

```html
<section>
  <p>Top Stories</p>
  <section>
    <p>News</p>
    <article>Story 1</article>
    <article>Story 2</article>
    <article>Story 3</article>
  </section>
  <section>
    <p>Sport</p>
    <article>Story 1</article>
    <article>Story 2</article>
    <article>Story 3</article>
  </section>
</section>
```

#### <code>&#60;header&#62;</code> and <code>&#60;hgroup&#62;</code>
The <code>&#60;header&#62;</code> element is generally found at the top of a document, a section, or an article and usually contains the main heading and some navigation and search tools.
  
```html
<header>
  <h1>Company A</h1>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact us</a></li>
  </ul>
  <form target="/search">
    <input name="q" type="search" />
    <input type="submit" />
  </form>
</header>
```

The <code>&#60;hgroup&#62;</code> element should be used where you want a main heading with one or more subheadings.
  
```html
<hgroup>
  <h1>Heading 1</h1>
  <h2>Subheading 1</h2>
  <h2>Subheading 2</h2>
</hgroup>
```

REMEMBER, that the <code>&#60;header&#62;</code> element can contain any content, but the <code>&#60;hgroup&#62;</code> element can only contain other headers, that is <code>&#60;h1&#62;</code> to <code>&#60;h6&#62;</code> and including <code>&#60;hgroup&#62;</code>.
  
#### <code>&#60;aside&#62;</code>
The <code>&#60;aside&#62;</code> element is intended for content that is not part of the flow of the text in which it appears, however still related in some way.  This of <code>&#60;aside&#62;</code> as a sidebar to your main content.
  
```html
<aside>
  <p>This is a sidebar, for example a terminology definition or a short background to a historical figure.</p>
</aside>
```

#### <nav>
Before HTML5, our menus were created with <code>&#60;ul&#62;</code>’s and <code>&#60;li&#62;</code>’s.  Now, together with these, we can separate our menu items with a <code>&#60;nav&#62;</code>, for navigation between your pages.  You can have any number of <code>&#60;nav&#62;</code> elements on a page, for example, its common to have global navigation across the top (in the <code>&#60;header&#62;</code>) and local navigation in a sidebar (in an <code>&#60;aside&#62;</code> element).
  
```html
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact us</a></li>
  </ul>
</nav>
```

#### <code>&#60;footer&#62;</code>
If there is a <code>&#60;header&#62;</code> there must be a <code>&#60;footer&#62;</code>.    A <code>&#60;footer&#62;</code> is generally found at the bottom of a document, a section, or an article.  Just like the <code>&#60;header&#62;</code> the content is generally metainformation, such as author details, legal information, and/or links to related information.  It is also valid to include <code>&#60;section&#62;</code> elements within a footer.
  
```html
<footer>&copy;Company A</footer>
```

#### <code>&#60;small&#62;</code>
The <code>&#60;small&#62;</code> element often appears within a <code>&#60;footer&#62;</code> or <code>&#60;aside&#62;</code> element which would usually contain copyright information or legal disclaimers, and other such fine print.  However, this is not intended to make the text smaller.  It is just describing its content, not prescribing presentation.
  
```html
<footer><small>&copy;Company A</small> Date</footer>
```

#### <code>&#60;time&#62;</code>
The <code>&#60;time&#62;</code> element allows an unambiguous ISO 8601 date to be attached to a human-readable version of that date.
  
```html
<time datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time>
```

Why bother with <code>&#60;time&#62;</code>?  While humans can read time that can disambiguate through context in the normal way, the computers can read the ISO 8601 date and see the date, time, and the time zone. 
  
#### <code>&#60;figure&#62;</code> and <code>&#60;figcaption&#62;</code>
<code>&#60;figure&#62;</code> is for wrapping your image content around it, and <code>&#60;figcaption&#62;</code> is to caption your image.
  
```html
<figure>
  <img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" />
  <figcaption>Cover art for Middle-earth: Shadow of Mordor</figcaption>
</figure>
```
### Learn more about the new HTML5 elements:
* [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp) provides simple and clear descriptions of many of the news elements and how/where they should be used.
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) also provides a great reference for all HTML elements and goes deeper into each.

