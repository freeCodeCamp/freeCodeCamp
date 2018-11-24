---
title: Class Selector
---
## Class Selector
A Class Selector is used in a CSS file to apply style to the HTML elements with the corresponding class name. In HTML, you can set the class name for any element by adding a `class` attribute.

To select elements with a specific class, we use a (.) named as period character, with the name of the class.

For example
.center {
    text-align: center;
    color: red;
}

Here, all HTML elements with `class="center"` will be red and center-aligned.

Examples:
```html
<h1 class="test">This is a heading 1</h1>
<p class="test">This is a paragraph 1</p>
<h2 class="test">This is a heading 2</h2>
<p class="test">This is a paragraph 2</p>
<div class="test2 test3">This is a div 1</div>
```
Since a class name is not unique, the HTML class attribute makes it possible to define equal styles for elements with the same class name. **Here is how you can select class in a CSS file to style elements (notice the . notation):**    

**All elements of class `test` will be applied with this style:**    
```css
.test {
  color: green;
}
```
**All `<p>` elements of class `test` will be applied with this style:**  
```css
p.test {
  border: 1px solid black;
  color: red;
}
```
**All `<h1>` and `<h2>` elements of class `test` will be applied with this style:**  
```css
h1.test, h2.test {
  color: blue;
}
```
**All elements which have both class `test2` and `test3` will be applied with this style:**
```css
.test2.test3 {
  color: green;
}
```
**Tips: No space between multiple classes.**
#### More Information:
CSS Syntax and Selectors: <a href='https://www.w3schools.com/css/css_syntax.asp' target='_blank' rel='nofollow'>w3schools</a>


