---
title: Elements
---

# Elements

Elements are the building blocks of HTML that describe the structure and content of a web page. They are the _markup_ part of HyperText Markup Language (HTML).

HTML syntax uses angle brackets ("&lt;" and "&gt;") to hold the name of an HTML element. Elements usually have an opening tag and a closing tag, and give information about the content they contain. A closing tag has a forward slash and the opening tag does not.

Here's an example using the _p element_ to tell the browser that a group of text is a paragraph:

```html
<p>This is a paragraph.</p>
```

Opening and closing tags should match, otherwise the browser may display content in an unexpected way.

![XKCD comic showing the text "Q: How do you annoy a developer?" surrounded by an opening div tag and closing span tag](http://imgs.xkcd.com/comics/tags.png)

## Self-closing elements

Self-closing HTML elements do not require a closing tag.

An example is the _br element_ (`<br>`), which inserts a line break in text. Prior to HTML5, self-closing tags required a forward slash (`<br/>`, for example), however the HTML5 specification no longer requires this.

## HTML element functionality

HTML elements can perform many different funtions in an HTML documetns, including:

  - Provide information about the web page (metadata).
  - Structure the page content into sections.
  - Embed images, videos, audio clips, or other multimedia.
  - Create lists, tables, and forms.
  - Provide more information about certain text content.
  - Link to stylesheets which provide display information.
  - Reference scripts which add dynamic behavior to the page.

## Nesting HTML elements

You can nest elements within other elements in an HTML document to define the structure of the page. Tags must be closed in the reverse of the order in which they are opened.

Correct:
`<p>This is a paragraph that contains a <span>span element.</span></p>`

Incorrect:
`<p>This is a paragraph that contains a <span>span element.</p></span>`


## Block-level elements and inline elements

Elements are divided into two categories: _block-level_ elements and _inline_ elements. Browsers render block-level elements on a new line while inline elements are rendered inline with their surrounding content.

Elements that provide structure the page, such as a navigation bar, headings, and paragraphs, are typically block-level elements. Elements that insert or give more information about content are generally inline, such as [links](#) or [images](#).

## The HTML element

There's an `<html>` element that's used to contain the other markup for an HTML document. It's also known as the "root" element because it's the parent of the other HTML elements and the content of a page.

Here's an example of a page with a [head element](#the-head-element), a [body element](#the-body-element), and one [paragraph](#the-p-element):

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p>I'm a paragraph</p>
  </body>
</html>
```

## The head element

This is the container for processing information and metadata for an HTML document.

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## The body element

The body element contains an HTML document's displayable content.

```html
<body>...</body>
```

## The p element

The `<p>` element is a block-level element which creates a paragraph.

```html
<p>...</p>
```

## The a element

The `<a>` element creates a hyperlink to direct visitors to another page or resource.

```html
<a href="#">...</a>
```
