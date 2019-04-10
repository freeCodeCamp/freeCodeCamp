---
title: Elements
---
# HTML Elements

Elements are the building blocks of HTML that describe the structure and content of a web page. They are the "Markup" part of HyperText Markup Language (HTML).

HTML syntax uses the angle brackets ("&lt;" and "&gt;") to hold the name of an HTML element. Elements usually have an opening tag and a closing tag, and give information about the content they contain. The difference between the two is that the closing tag has a forward slash.

Here's an example using the [p element](#) (`<p>`) to tell the browser that a group of text is a paragraph:

```html
<p>This is a paragraph.</p>
```

Opening and closing tags should match, otherwise the browser may display content in an unexpected way.

![XKCD comic showing the text "Q: How do you annoy a developer?" surrounded by an opening div tag and closing span tag](http://imgs.xkcd.com/comics/tags.png)

## Self-closing Elements

Some HTML elements are self-closing, meaning they don't have a separate closing tag. Self-closing elements typically insert something into your document.

An example is the [br element](#) (`<br>`), which inserts a line break in text. Formerly, self-closing tags had the forward slash inside them (`<br />`), however, HTML5 specification no longer requires this.

## HTML Element Functionality

There are many available HTML elements. Here's a list of some of the functions they perform:

  - give information about the web page itself (the metadata)
  - structure the content of the page into sections
  - embed images, videos, audio clips, or other multimedia
  - create lists, tables, and forms
  - give more information about certain text content
  - link to stylesheets which have rules about how the browser should display the page
  - add scripts to make a page more interactive and dynamic

## Nesting HTML Elements

You can nest elements within other elements in an HTML document. This helps define the structure of the page. Just make sure the tags close from the inside-most element first.

Correct:
`<p>This is a paragraph that contains a <span>span element.</span></p>`

Incorrect:
`<p>This is a paragraph that contains a <span>span element.</p></span>`


## Block-level and Inline Elements

Elements come in two general categories, known as block-level and inline. Block-level elements automatically start on a new line while inline elements sit within surrounding content.

Elements that help structure the page into sections, such as a navigation bar, headings, and paragraphs, are typically block-level elements. Elements that insert or give more information about content are generally inline, such as [links](#) or [images](#).

## The HTML Element

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

## The HEAD Element

This is the container for processing information and metadata for an HTML document.

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## The BODY Element

This is container for the displayable content of an HTML document.

```html
<body>...</body>
```

## The P Element

Creates a paragraph, perhaps the most common block level element.

```html
<p>...</p>
```

## The A(Link) Element

Creates a hyperlink to direct visitors to another page or resource.

```html
<a href="#">...</a>
```

## Other Resources

- [HTML Paragraphs](#)
- [HTML br](#)
- [HTML Links](#)
- [HTML Images](#)
- [HTML Head](#)
- [HTML Body](#)
- [HTML DOCTYPE](#)
