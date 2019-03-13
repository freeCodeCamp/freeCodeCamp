---
title: Introduction to CSS
---

## Table of Contents

* [Introduction to CSS](#introduction-to-css)
* [What is CSS?](#what-is-css)
* [Using CSS](#using-css)
* [More Information](#more-information)

## Introduction to CSS

### What is CSS?

Cascading Style Sheets (CSS) describe how the html on a page should appear. 

CSS was first proposed way back in 1994 by Håkon Wium Lie, who was working with Tim Berners-Lee at CERN.

Before CSS, developers would apply styles using attributes or special tags on each node of a page. This made markup repetitive and prone to errors.

CSS allows selectors to describe how each piece of matching content should look. It is an important technology of World Wide Web, along with HTML and Javascript.
```CSS
body {
    font-size: 15px;
}

a {
    color: rebeccapurple;
    text-decoration: underline;
}
```

### Using CSS

**External style sheets** let many pages share the same styles.

```HTML
<link href="styles.css" rel="stylesheet" type="text/css">
```

**Internal style sheets** apply CSS to all matching tags on a page.

```HTML
<style>
    h1 {
        font-family: sans-serif;
        margin-bottom: 1.5em;
    }
</style>
```

**Inline CSS** apply styles to a single tag.

```HTML
<img src="..." style="border: 1px solid red;" />
```

#### More Information:
* [W3Schools](https://www.w3schools.com/css/css_intro.asp)
* [CSS-Tricks Almanac](https://css-tricks.com/almanac/)
* [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
* [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
