---
title: Basic HTML
---

## Basic HTML

### Document Declaration
An HTML document must start with a document type declaration: ```<!DOCTYPE html>``` which tells the browser that you want the page to be rendered using HTML5.

The document begins with ```<html>``` and ends with ```</html>```.

The ```<head>``` tag is used to store important metadata (which is not displayed on the page). In this example we'll be looking at the ```<title>``` meta-tag but there are many others to be familiar with such as: ```<style>```,```<meta>```,```<link>```,```<script>```, and ```<base>```. 

The part of the HTML that you see on the page is located between the ```<body></body>``` tags.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the Page</title>
  </head>
  <body>
  </body>
</html>
```
### Headings
HTML Headings are defined with ```h1``` to ```h6``` tags.
```h1``` is the most important heading, while ```h6``` is the least important heading.

Headings are stored in the ```<body>``` tag.
```html
<h1>Most Important Heading</h1>
<h2>Less Important Heading</h2>
<h3>Least Important Heading</h3>
```
### Paragraphs
HTML Paragraphs are written within a ```<p>``` tag, these also go inside the ```<body>```.
```html
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```
### Links
HTML links are defined with the ```<a>``` or 'anchor tag'. 

These are stored within the ```<body>```.
```html
<!-- The href attribute specifies the destination of the link, in this case, the freeCodeCamp guide. The link text is written in between the <a></a> tags. -->
<a href="https://guide.freecodecamp.org">This is a link to the freeCodeCamp Guides</a>
```
This is what it would look like: [This is a link to the freeCodeCamp Guides](https://guide.freecodecamp.org).
### Images
HTML images are written inside of an ```<img>``` tag.

The link url/link is attached to the ```src``` attribute.

The ```alt``` attribute is used to display some text when the image fails to be displayed.

The ```<img>``` tag is stored inside of the ```<body>``` tag.
```html
<img src="image_link_here.jpg" alt="alternative-text">
```
### Lists
HTML lists are defined with a ```<ul>``` (unordered list) or a ```<ol>``` (ordered list) tag. Inside of those tags are ```<li>``` tags, which list the items inside of the list.

These are also stored inside the ```<body>```.
```html
<ul>
  <li>First List Item</li>
  <li>Second List Item</li>
  <li>Third List Item</li>
</ul>

<ol>
  <li>List Item #1</li>
  <li>List Item #2</li>
  <li>List Item #3</li>
</ol>
```
### Buttons
HTML buttons use the ```<button>``` tag and are also stored inside the ```<body>``` tag.
```html
<button>Button Text</button>
```