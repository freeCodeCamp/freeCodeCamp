---
title: Cascading Style Sheets (CSS)
---

![CSS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/320px-CSS3_logo_and_wordmark.svg.png)

## Cascading Style Sheets (CSS)
CSS stands for *Cascading Style Sheets*. It is a language used for describing the style of a document written in HTML. It was designed to enable the separation of presentation and content, which greatly improved content accessibility and gave more flexibility and control in the specification of presentation, and reduced complexity and repetition in the structural content. It was first invented in 1996, and is now a standard feature of all major web browsers. The newest version of CSS is CSS3, which builds upon CSS2.1 and adds more visual functionalities, ready for the modern world.

We can describe CSS in three ways:
 1) Internal CSS
 2) External CSS
 3) Inline CSS
 
External CSS files save with extension of .css.

CSS specifications are maintained by the [World Wide Web Consortium (W3C)](https://www.w3.org/).

You can build some pretty amazing things in CSS alone, such as this pure-CSS [Minesweeper game](https://codepen.io/bali_balo/pen/BLJONk) (which uses no JavaScript).
![Minesweeper clone in CSS](https://cdn-images-1.medium.com/max/800/1*GFcKk9KxqHAnWa1ECcKDOQ.png)

### Syntax
`body { background-color: yellow; }` this is the Syntax of a CSS property.  
In here, `body` is the selector and says what HTML element we want to style.
`background-color` is the property we want to style.  
and `yellow` is the style we want to give it.

### Sample Code:
```html
<!DOCTYPE html>
<html>
  <head>
	  <style>
  		body { background-color: Yellow; }
      p { font-size: 18px; } 
	  </style>
  </head>
  
  <body>
	  <p>Welcome to the world of CSS</p>
  </body>
</html>
```
We use the `<style>` and `</style>` tags to define the CSS in the HTML file.

### Popular CSS Frameworks 2018
Frameworks exist to make the more complex parts of css easier and more efficient for developers to build out websites.
Some of the most popular CSS Frameworks are:
Bootstrap, Foundation, Bulma, uikit, Semantic UI, mini.css, Materialize, Material Design Lite, Spectre, Kube, and tailwind.css

### Suggested Reading:

A good start is the freeCodeCamp curriculum [Introduction to Basic CSS](https://learn.freecodecamp.org/responsive-web-design/basic-css).

Another suggestion for beginners is W3C's [Starting with HTML + CSS](https://www.w3.org/Style/Examples/011/firstcss) teaches how to create a style sheet. 

[Jon Duckett's book on HTML and CSS](https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189) could be an exellent start for the ones who wish to explore the topic to it's great depth with some amazing examples.

The site [CSS Zen Garden](http://www.csszengarden.com/) is a great example of how the same HTML code/structure can be styled to look different in unique ways.

The [Odin Project](https://www.theodinproject.com/courses/html5-and-css3)  features a full course on using CSS alongside HTML.

For a demonstration of the power of CSS, check out [Species In Pieces](http://species-in-pieces.com/#).

Want more infomation about CSS? check out [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for more resources for developers, BY developers!

When you're practice and working with CSS, you can refer to this [CSS reference](https://cssreference.io/) to help you along the way if you're unsure about a property. A great tool for helping visualize what each CSS property does.

To find some awesome articles and summaries of Front End Development related ideas visit [CSS-Tricks](https://css-tricks.com)
