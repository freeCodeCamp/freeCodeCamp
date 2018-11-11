---
title: HTML
---

# HTML

HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. A markup language like HTML allows us to:
   1) Create links to other documents
   2) Atructure the content in our document 
   3) Ascribe context and meaning to the content of our document
 
An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. We structure our pages using [HTML elements](#). They are constructs of the language providing [structure](#) and [meaning](#) in our document for the browser and the [<anchor>](#) element links to other documents across the internet.

The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet in late 1991 by Tim Berners-Lee, who is widely credited with the invention of html. 

The internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.
 
HTML5 is the latest version, or specification, of HTML. The [World Wide Web Consortium (W3C)](https://www.w3.org/) is the organization responsible for developing standards for the World Wide Web, including those for HTML. As web pages and web applications grow more complex, W3C  updates HTML's standards.
 
HTML5 introduces a host of semantic elements. Though we discussed HTML helped to provide meaning to our document, it wasn't until HTML5s' introduction of [semantic elements](#) that its potential was realized.


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

### HTML Tags

HTML tags are element names surrounded by angle brackets:

```<tagname> here is the content.. </tagname>```

HTML tags normally come in pairs like ```<h1>```and ```</h1>```

The first tag in a pair is the start tag, the second tag is the end tag

The end tag is written like the start tag, but with a forward slash inserted before the tag name

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

The extent of an element is indicated by a pair of tags: a "start tag" `<p>` and "end tag" `</p>`. The text content of the element, if any, is placed between these tags.

Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.

The start tag may also include attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the `<img>` used to embed images, the reference to the image resource.

Some elements, such as the line break `<br>` or `<br/>`, do not permit any embedded content, either text or further tags. These require only a single empty tag (start tag) and do not use an end tag.

### Element examples

Header of the HTML document:

```html
<head>...</head>
```
The `<title>...</title>` element is one element normally included in the head. For example:

```html
<head>
  <title>The Title</title>
</head>
```

**Headings**  
HTML headings are defined with the `<h1>` to `<h6>` tags:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

**Paragraphs**  

`<p>Paragraph 1</p>`
`<p>Paragraph 2</p>`

**Line Breaks**  

```html
<br/>
```

The difference between `<br/>` and `<p>` is that `br` breaks a line without altering the semantic structure of the page, whereas `p` sections the page into paragraphs. Note also that `br` is an empty element in that, although it may have attributes, it can take no content and it may not have an end tag.

```html
<p>This is a paragraph <br> with <br> line breaks</p>
```

**Anchor/Links**  

To create a link the `<a>` tag is used. The href attribute holds the URL address of the link.

```html
<a href="https://www.youtube.com">A link to Youtube!</a>
```

**Inputs**

There are many possible ways a user can give input/s like:

```html
<input type="text" /> <!-- This is for text input -->
<input type="file" /> <!-- This is for uploading files -->
<input type="checkbox" /> <!-- This is for checkboxes -->
```

**Comments**

```
<!-- This is a comment -->
```

Comments can help in the understanding of the markup and do not display in the webpage.
