---
title: HTML
---

# HTML

HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. A markup language like HTML allows us to 1) create links to other documents, websites, webpages 2) structure the content in our document, website and 3) ascribe context and meaning to the content of our document.
 
An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. We structure our pages using [HTML elements](#). They are constructs of the language providing [structure](#) and [meaning](#) to our document for the browser and the [<anchor>](#) element links to other documents across the internet.
 
The internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.
 
HTML5 is the latest version, or specification, of HTML. The World Wide Web Consortium (W3C) is the organization responsible for developing standards for the World Wide Web, including those for HTML. As web pages and web applications grow more complex, W3C  updates HTML's standards.
 
HTML5 Introduces a host of semantic elements. Though we discussed HTML helped to provide meaning to our document, it wasn't until HTML5's introduction of [semantic elements](#) that it's potential was realized.

## A simple example of HTML Document

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First h1 Heading</h1>
  <h2>My First h2 Heading</h2>
  <h3>My First h3 Heading</h3>
  <h4>My First h4 Heading</h4>
  <h5>My First h5 Heading</h5>
  <h6>My First h6 Heading</h6>
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

h2: The element defines a 2nd large heading

h3: The element defines a 3rd large heading

h4: The element defines a 4th large heading

h5: The element defines a 5th large heading

h6: The element defines a smallest heading

p: The element defines a paragraph


> An HTML element is a combination of an opening tag, content to be displayed and a closing tag.

> ```html
> <h1>This is the h1 element</h1>
> ```

The above is a HTML element with h1 opening & closing tags and content to be presented online in between those two tags.

> There are six types of heading tags provided in all HTML versions. # h1 is the largest heading tag and ###### h6 is the smallest heading tag.

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
