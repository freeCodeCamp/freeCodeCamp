---
title: CSS Classes
---
## CSS Classes

Classes are an efficient way of grouping HTML elements so that they can share the same styles. CSS (Cascading Style Sheets) classes can be used to arrange and decorate web page elements.

When writing HTML, you can add classes to an element. Just add the attribute `class="myclass"` to the element. Multiple elements can have the same class, and one element can have multiple classes. You can assign multiple classes to an element by adding all the desired class names separated by a space to the `class` attribute in HTML.

```html
<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1>
<p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p>
```

You can then style these elements with CSS. Classes are referenced with period (.) before them in CSS, but you should not put periods in your HTML.

```css
.super-man {
  color: red;
  background-color: blue;
}
```

This code will give s blue background and red text color to all the elements which have the `super-man` class.
[View this example on CodePen](https://codepen.io/Tlandis/pen/RLvomV).

You can also declare more than one class to your element, like:

```html

<div class="ironMan alfred">
 We're going to save you.
</div>

```

Then in your css file:

```css

.ironMan{
  color:red;
}

.alfred{
  background-color: black;
}

```

**Note:** Class names are traditionally all lowercase, with each word in a multi-word class name separated by hyphens (e.g. "super-man").

You can also combine classes in the same line:
```css
.superMan .spiderMan {
  color: red;
  background-color: blue;
}
```

You can see the result of the above code [here](https://codepen.io/Tlandis/pen/RLvomV).  Learn how to combine css classes using selectors [here](https://www.w3schools.com/css/css_combinators.asp). 

#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->

- [CSS Class Selector, w3 schools](https://www.w3schools.com/cssref/sel_class.asp)
- [HTML Classes, w3 Schools](https://www.w3schools.com/html/html_classes.asp)
- [css-tricks](https://css-tricks.com/how-css-selectors-work/)
- [How to Code in HTML5 and CSS3](http://howtocodeinhtml.com/chapter7.html)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
