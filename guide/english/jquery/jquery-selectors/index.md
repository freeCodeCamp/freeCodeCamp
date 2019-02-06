---
title: jQuery Selectors
---

## jQuery Selectors

jQuery uses CSS-style selectors to select parts, or elements, of an HTML page. It then lets you do something with the elements using jQuery methods, or functions.

To use one of these selectors, type a dollar sign and parentheses after it: `$()`. This is shorthand for the `jQuery()` function. Inside the parentheses, add the element you want to select. You can use either single- or double-quotes. After this, add a dot after the parentheses and the method you want to use.

In jQuery, the class and ID selectors are like those in CSS.

Here's an example of a jQuery method that selects all paragraph elements, and adds a class of "selected" to them:

```javascript
<p>This is a paragraph selected by a jQuery method.</p>
<p>This is also a paragraph selected by a jQuery method.</p>

$("p").addClass("selected");
```

In jQuery, the class and ID selectors are the same as in CSS. If you want to select elements with a certain class, use a dot (`.`) and the class name. If you want to select elements with a certain ID, use the hash symbol (`#`) and the ID name. Note that HTML is not case-sensitive, therefore it is best practice to keep HTML markup and CSS selectors lowercase.

Selecting by class:

```javascript
<p class="p-with-class">Paragraph with a class.</p>

$(".p-with-class").css("color", "blue"); // colors the text blue
```

Selecting by ID:

```javascript
<li id="li-with-id">List item with an ID.</li>

$("#li-with-id").replaceWith("<p>Socks</p>");
```

You can also select certain elements along with their classes and IDs:

### Selecting by class
If you want to select elements with a certain class, use a dot (.) and the class name.
```html
<p class="pWithClass">Paragraph with a class.</p>
```
```javascript
$(".pWithClass").css("color", "blue"); // colors the text blue
```

You can also use the class selector in combination with a tag name to be more specific.
```html
<ul class="wishList">My Wish List</ul>`<br>
```
```javascript
$("ul.wishList").append("<li>New blender</li>");
```

### Selecting by ID
If you want to select elements with a certain ID value, use the hash symbol (#) and the ID name.
```html
<li id="liWithID">List item with an ID.</li>
```
```javascript
$("#liWithID").replaceWith("<p>Socks</p>");
```

As with the class selector, this can also be used in combination with a tag name.
```html
<h1 id="headline">News Headline</h1>
```
```javascript
$("h1#headline").css("font-size", "2em");
```

### Selecting by attribute value
If you want to select elements with a certain attribute, use ([attributeName="value"]).
```html
<input name="myInput" />
```
```javascript
$("[name='myInput']").value("Test"); // sets input value to "Test"
```

You can also use the attribute selector in combination with a tag name to be more specific.
```html
<input name="myElement" />`<br>
<button name="myElement">Button</button>
```
```javascript
$("input[name='myElement']").remove(); // removes the input field not the button
```

### Selectors that act as filters
There are also selectors that act as filters - they will usually start with colons. For example, the `:first` selector selects the element that is the first child of its parent. Here's an example of an unordered list with some list items. The jQuery selector below the list selects the first `<li>` element in the list--the "One" list item--and then uses the `.css` method to turn the text green.

```html
   <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
   </ul>
```
```javascript
$("li:first").css("color", "green");
```

**Note:** Don't forget that applying css in JavaScript is not a good practice. You should always give your styles in css files.

Another filtering selector, `:contains(text)`, selects elements that have a certain text. Place the text you want to match in the parentheses. Here's an example with two paragraphs. The jQuery selector takes the word "Moto" and changes its color to yellow.

```html
    <p>Hello</p>
    <p>World</p>
```
```javascript
$("p:contains('World')").css("color", "yellow");
```

Similarly, the `:last` selector selects the element that is the last child of its parent. The jQuery selector below selects the last `<li>` element in the list--the "Three" list item--and then uses the `.css` method to turn the text yellow.

`$("li:last").css("color", "yellow");`

**Note:** In the jQuery selector, `World` is in single-quotes because it is already inside a pair of double-quotes. Always use single-quotes inside double-quotes to avoid unintentionally ending a string.

**Multiple Selectors**
In jQuery, you can use multiple selectors to apply the same changes to more than one element, using a single line of code. You do this by separating the different ids with a comma. For example, if you want to set the background color of three elements with ids cat,dog,and rat respectively to red, simply do:
```
$("#cat,#dog,#rat").css("background-color","red");
```

These are just a few of the selectors available for use in jQuery. See the More Information section for a link to the complete list on the jQuery website.

#### More Information:
* [Full list of jQuery selectors](http://api.jquery.com/category/selectors/)
