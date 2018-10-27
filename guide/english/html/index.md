---
title: HTML
---

# HTML

HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. A markup language like HTML allows us to 1) create links to other documents, 2) structure the content in our document, and 3) ascribe context and meaning to the content of our document.
 
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

## Elements in HTML

HTML documents imply a structure of nested HTML elements. These are indicated in the document by HTML tags, enclosed in angle brackets thus: <p>.

In the simple, general case, the extent of an element is indicated by a pair of tags: a "start tag" <p> and "end tag" </p>. The text content of the element, if any, is placed between these tags.

Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.

The start tag may also include attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the <img> used to embed images, the reference to the image resource.

Some elements, such as the line break <br>, do not permit any embedded content, either text or further tags. These require only a single empty tag (akin to a start tag) and do not use an end tag.

Many tags, particularly the closing end tag for the very commonly used paragraph element <p>, are optional. An HTML browser or other agent can infer the closure for the end of an element from the context and the structural rules defined by the HTML standard. These rules are complex and not widely understood by most HTML coders.

The general form of an HTML element is therefore: <tag attribute1="value1" attribute2="value2">''content''</tag>. Some HTML elements are defined as empty elements and take the form <tag attribute1="value1" attribute2="value2">. Empty elements may enclose no content, for instance, the <br> tag or the inline <img> tag. The name of an HTML element is the name used in the tags. Note that the end tag's name is preceded by a slash character, /, and that in empty elements the end tag is neither required nor allowed. If attributes are not mentioned, default values are used in each case.

#### Other Resources

- [HTML Elements](https://guide.freecodecamp.org/html/elements)
- [Semantic HTML](https://guide.freecodecamp.org/html/html5-semantic-elements)
- [HTML Attributes](https://guide.freecodecamp.org/html/attributes)
