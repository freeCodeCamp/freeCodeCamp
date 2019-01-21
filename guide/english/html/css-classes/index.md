---
title: CSS Classes
---
## CSS Classes

Classes are an efficient way of grouping HTML elements so they can share the same styles. CSS (Cascading Style Sheets) classes can be used to arrange and decorate web page elements.

When writing HTML, you can add classes to an element. Just add the attribute `class="myclass"` to the element. Multiple elements can have the same class, and one element can have multiple classes. You can assign multiple classes to an element by adding all the desired class names separated by a space to the `class` attribute in HTML.

```html
<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1>
<p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p>
```

You can then style these elements with CSS. Classes are referenced with period (.) before them in CSS, but you should not put periods in your HTML. `<div class="super-man">` notice how in the HTML the class name does not take a dot, or period.

```css
.super-man {
  color: red;
  background-color: blue;
}
```

This code will give a blue background and red text color to all the elements which have the `super-man` class.
[View this example on CodePen](https://codepen.io/Tlandis/pen/RLvomV).

You can also declare more than one class to your element as mentioned before, like:

```html

<div class="iron-man alfred">
 We're going to save you.
</div>

```

Then in your css file:

```css

.iron-man {
  color: red;
}

.alfred {
  background-color: black;
}

```
The order of the multiple classes you give to an element is irrelevant. If classes of a single element have conflicting styling, the order of the classes does not override the styling of the element but the order in CSS does.

```html

<div class="batMan voice">
 I have a deep voice.
</div>

```
```css

.voice{
  color:red;
  border:1px solid #000
}

.batMan{
  border:1px solid #194745
}

```
In this example, border of the element would be green even if the class "voice" comes second in html.

**Note:** Class names are traditionally all lowercase, with each word in a multi-word class name separated by hyphens (e.g. "super-man").  This format is also known as kebab-case.

You can also combine classes on the same line:
```css
.super-man, .spider-man {
  color: red;
  background-color: blue;
}
```

You can see the result of the above code [here](https://codepen.io/Tlandis/pen/RLvomV).  Learn how to combine CSS classes using selectors [here](https://www.w3schools.com/css/css_combinators.asp). 

#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->

- [CSS Class Selector, w3 schools](https://www.w3schools.com/cssref/sel_class.asp)
- [HTML Classes, w3 Schools](https://www.w3schools.com/html/html_classes.asp)
- [css-tricks](https://css-tricks.com/how-css-selectors-work/)
- [How to Code in HTML5 and CSS3](http://howtocodeinhtml.com/chapter7.html)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)

