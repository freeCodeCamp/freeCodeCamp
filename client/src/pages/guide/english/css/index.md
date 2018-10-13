---
title: Cascading Style Sheets (CSS)
---

### Cascading Style Sheets (CSS)

CSS is an acronym for Cascading Style Sheets. It was first invented in 1996, and is now a standard feature of all major web browsers.

CSS allows for developers to control how web pages look by "styling" the HTML structure of that page.

CSS specifications are maintained by the [World Wide Web Consortium (W3C)](https://www.w3.org/).

You can build some pretty amazing things in CSS alone, such as this pure-CSS [Minesweeper game](https://codepen.io/bali_balo/pen/BLJONk) (which uses no JavaScript).

![](https://cdn-images-1.medium.com/max/800/1*GFcKk9KxqHAnWa1ECcKDOQ.png)

### Uses
Before CSS, nearly all presentational attributes of HTML documents were contained within the HTML markup. All font colors, background styles, element alignments, borders and sizes had to be explicitly described, often repeatedly, within the HTML. CSS lets authors move much of that information to another file, the style sheet, resulting in considerably simpler HTML.

For example, headings (h1 elements), sub-headings (h2), sub-sub-headings (h3), etc., are defined structurally using HTML. In print and on the screen, choice of font, size, color and emphasis for these elements is presentational.

Before CSS, document authors who wanted to assign such typographic characteristics to, say, all h2 headings had to repeat HTML presentational markup for each occurrence of that heading type. This made documents more complex, larger, and more error-prone and difficult to maintain. CSS allows the separation of presentation from structure. CSS can define color, font, text alignment, size, borders, spacing, layout and many other typographic characteristics, and can do so independently for on-screen and printed views. CSS also defines non-visual styles, such as reading speed and emphasis for aural text readers. The W3C has now deprecated the use of all presentational HTML markup.

For example, under pre-CSS HTML, a heading element defined with red text would be written as:

<h1><font color="red"> Chapter 1. </font></h1>
Using CSS, the same element can be coded using style properties instead of HTML presentational attributes:

<h1 style="color: red;"> Chapter 1. </h1>
The advantages of this may not be immediately clear (since the second form is actually more verbose), but the power of CSS becomes more apparent when the style properties are placed in an internal style element or, even better, an external CSS file. For example, suppose the document contains the style element:

<style>
h1 {color: red;}
</style>
All h1 elements in the document will then automatically become red without requiring any explicit code. If the author later wanted to make h1 elements blue instead, this could be done by changing the style element to:

<style>
h1 {color: blue;}
</style>
rather than by laboriously going through the document and changing the color for each individual h1 element.

The styles can also be placed in an external CSS file, as described below, and loaded using syntax similar to:

<link href="path/to/file.css" rel="stylesheet" type="text/css">
This further decouples the styling from the HTML document, and makes it possible to restyle multiple documents by simply editing a shared external CSS file.

#### Suggested Reading:
A good start is the freeCodeCamp curriculum [Introduction to Basic CSS](https://learn.freecodecamp.org/responsive-web-design/basic-css).

Another suggestion for beginners is W3C's [Starting with HTML + CSS](https://www.w3.org/Style/Examples/011/firstcss) teaches how to create a style sheet.

The site [CSS Zen Garden](http://www.csszengarden.com/) is a great example how the same html can be styled to look totally unique.

For a demonstration of the power of CSS, check out [Species In Pieces](http://species-in-pieces.com/#).
