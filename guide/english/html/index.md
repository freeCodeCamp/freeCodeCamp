---
title: HTML
---

# HTML

HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. A markup languages like HTML allows us to 1) create links to other documents, 2) structure the content in our document, and 3) ascribe context and meaning to the content of our document.
 
An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. We structure our pages using [HTML elements](#). They are constructs of the language providing [structure](#) and [meaning](#) in our document for the browser and the [<anchor>](#) element links to other documents across the internet.
 
The internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.
 
HTML5 is the latest version, or specification, of HTML. The World Wide Web Consortium (W3C) is the organization responsible for developing standards for the World Wide Web, including those for HTML. As web pages and web applications grow more complex, W3C  updates HTML's standards.
 
HTML5 Introduces a host of semantic elements. Though we discussed HTML helped to provided meaning to our document, it wasn't until HTML5s' introduction of [semantic elements](#) that its' potential was realized.

## A simple example of HTML Document

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
```

!DOCTYPE html: Defines this document to be HTML5

html: The root element of an HTML page

head: The element contains meta information about the document

title: The element specifies a title for the document

body: The element contains the visible page content

h1: The element defines a large heading

p: The element defines a paragraph

### HTML Versions

Since the early days of the web, there have been many versions of HTML

|Version|Year|
|--- |--- |
|HTML|1991|
|HTML 2.0|1995|
|HTML 3.2|1997|
|HTML 4.01|1999|
|XHTML|2000|
|HTML5|2014|

#### Other Resources

- [HTML Elements](https://guide.freecodecamp.org/html/elements)
- [Semantic HTML](https://guide.freecodecamp.org/html/html5-semantic-elements)
- [HTML Attributes](https://guide.freecodecamp.org/html/attributes)

# HTML Elements

The extent of an element is indicated by a pair of tags: a "start tag" <p> and "end tag" </p>. The text content of the element, if any, is placed between these tags.

Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.

The start tag may also include attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the <img> used to embed images, the reference to the image resource.

Some elements, such as the line break <br>, do not permit any embedded content, either text or further tags. These require only a single empty tag (start tag) and do not use an end tag.

Element examples
Header of the HTML document: <head>...</head>. The title is included in the head, for example:

<head>
  <title>The Title</title>
</head>

Headings: HTML headings are defined with the <h1> to <h6> tags:

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

Paragraphs:

<p>Paragraph 1</p> <p>Paragraph 2</p>
Line breaks: <br>. The difference between <br> and <p> is that br breaks a line without altering the semantic structure of the page, whereas p sections the page into paragraphs. Note also that br is an empty element in that, although it may have attributes, it can take no content and it may not have an end tag.

<p>This is a paragraph <br> with <br> line breaks</p>
This is a link in HTML. To create a link the <a> tag is used. The href attribute holds the URL address of the link.

<a href="https://www.youtube.com">A link to Youtube!</a>

Inputs:

There are many possible ways a user can give input/s like:

<input type="text" /> <!-- This is for text input -->
<input type="file" /> <!-- This is for uploading files -->
<input type="checkbox" /> <!-- This is for checkboxes -->

Comments:

<!-- This is a comment -->
Comments can help in the understanding of the markup and do not display in the webpage.
