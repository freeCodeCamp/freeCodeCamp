---
title: HTML
---

# HTML
![html logo](https://www.w3.org/html/logo/badge/html5-badge-h-solo.png)

HyperText Markup Language (HTML) is the standard [markup language](https://en.wikipedia.org/wiki/Markup_language) used for creating web pages, web applications and moreover is the foundation of most websites today. A markup language like HTML allows us to:

   1) Create links to other documents
   2) Structure the content in our document 
   3) Attribute context and meaning to the content of our document

An HTML document has two aspects which are the Markup and the HyperText. The first aspect contains structured information that makes up the website, and latter contains text-links (HyperText) to other documents. We structure our pages using [HTML elements](#). They are constructs of the language providing [structure](#) and [meaning](#) in our document for the browser and the [<anchor>](#) element links to other documents across the internet.

The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet in late 1991 by Tim Berners-Lee, who is widely credited with the invention of html. 

The Internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.
 
HTML5 is the latest version, or specification, of HTML. The [World Wide Web Consortium (W3C)](https://www.w3.org/) is the organization responsible for developing standards for the World Wide Web, including those for HTML. As web pages and web applications grow more complex, W3C updates HTML's standards.
 
HTML5 introduced a host of semantic elements. As discussed, HTML provides meaning to our documents, however it wasn't until HTML5's introduction of [semantic elements](#) that its potential was realized.

HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.

## A simple example of an HTML Document

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Heading or Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
```
In HTML tags come in pairs, as seen above. The first tag in a pair is called the *start tag* or the *opening tag*,and the second tag is called the *end tag* or the *closing tag*. The later comes with a forward slash, which is inserted before the tag name.

!DOCTYPE html: Defines this document to be HTML5

html: The root element of an HTML page

head: The element contains meta information about the document and non-visual elements that help make the page work

title: This element specifies a title for the document

body: This element contains the visible page content

h1: This element defines a large heading

p: This element defines a paragraph

### HTML Tags

HTML tags are element names surrounded by angle brackets:

```<tagname> here is the content.. </tagname>```

HTML tags normally come in pairs like ```<h1>```and ```</h1>```

The first tag in a pair is the start tag, the second tag is the end tag

The end tag is written like the start tag, but with a forward slash inserted before the tag name

### HTML Versions

Since the early days of the web, there have been many versions of HTML:

|Version|Year|
|--- |--- |
|HTML|1991|
|HTML 2.0|1995|
|HTML 3.2|1997|
|HTML 4.01|1999|
|XHTML|2000|
|HTML5|2014|

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

**Images**  

To insert an image, `<img>` tag is used. The `src` attribute holds the URL or path to the image.

```html
<img src="path/image_name.format" alt="descriptive text">
<img src="image_name.format" alt="descriptive text">
<img src="www.url/image_name.format" alt="descriptive text">
```

**Inputs**

There are many possible ways a user can give input/s, such as:

```html
<input type="text" /> <!-- This is for text input -->
<input type="file" /> <!-- This is for uploading files -->
<input type="checkbox" /> <!-- This is for checkboxes -->
<input type="radio" /> <!-- This is for radio buttons -->
```

**Comments**

```
<!-- This is a comment -->
```
Comments can help in the understanding of the markup and do not display in the webpage.

**Text Formatting**

HTML defines special elements for defining text with special meanings.

- `<b>` - Bold Text
- `<strong>` - Important text
- `<i>` - Italic Text
- `<em>` - Emphasized Text
- `<sub>` - Subscripted Text
- `<sup>` - Superscripted Text

## HTML Attributes

An attribute gives more information about an element. Attibutes always come inside an opening tag.

**Format of an attribute**

Name = “value”
Alt = “alternate text”. The alt attribute provides an alternative information about an image that is not displaying. It is good practice to use the alt attribute on all images for the sake of users who cannot view it to help screen readers access the alternate text of the image. An alt text should be a text that describes what the image is about. The alternative text is inserted into the 'alt' within the `<img>` tag

An example of `alt` attribute used in an `<img>` is this:

```html
<img src ="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="FreeCodeCamp Logo">
```

**Empty alt text**

An alt tag can be blank only when the image is used for decorative purposes. When an alt tag is empty, screen readers will ignore them. Decorative images do not add information to the content of the page. A blank alt tag is written without a text in the quotes `alt=""` or `alt = " " `.You might think that because the images is for decorative purposes, why not leave out the option of using `alt` attribute. When you leave out the `alt` attribute, screen readers would read out the file name instead. So, it is always best to include the `alt` attribute.

```
<img src="examples/topinfo_bg.png" alt="">
```

### New APIs

HTML5 related APIs
In addition to specifying markup, HTML 5 specifies scripting application programming interfaces (APIs) that can be used with JavaScript. Existing Document Object Model (DOM) interfaces are extended and de facto features documented. There are also new APIs, such as:

- Canvas
- Timed Media Playback
- Offline
- Editable content
- Drag and drop
- History
- MIME type and protocol handler registration
- Microdata
- Web Messaging
- Web Storage
    - a key-value pair storage framework that provides behaviour similar to cookies but with larger storage capacity and improved API

#### Learn HTML
- [Introduction to Basic HTML & HTML5](https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5/)
- [Scrimba's Basic HTML Course](https://scrimba.com/g/ghtml)
- [W3C's Full HTML Tutorial](https://www.w3schools.com/html/default.asp)

#### More Information

- [HTML Elements](https://guide.freecodecamp.org/html/elements)
- [Semantic HTML](https://guide.freecodecamp.org/html/html5-semantic-elements)
- [HTML Attributes](https://guide.freecodecamp.org/html/attributes)
- [HTML Reference](https://htmlreference.io/)
- [Image ALT Tag Tips for HTML](http://accessibility.psu.edu/images/imageshtml/)
- [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)
