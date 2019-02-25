---
title: Before Selector
---

# Before Selector
The CSS `::before` selector can be used to insert some content, usually cosmetic, *before* the content of an element or elements. It is used by attaching `::before` to the element it is to be used on. It is an inline element by default.

## Examples
Let's look at some examples:

```css
p::before {
  content: "";
  border: solid 5px #ccc;
}

span.comment::before {
  content: "Comment: ";
  color: blue;
}
```

```html
<p> To infinity and beyond</p>
<p> I am Buzz Lightyear, I come in peace.</p>

<span class="comment"> May the force be with you</span>
<br/>
<span> Do, or do not. There is no try.</span>

```

In the example above we are prepending a grey border before every paragraph element on a page and we are also prepending the word "Comment: " in blue before every `span` element with the class name `comment`.

> You can check out this demo here https://jsfiddle.net/kxrdswtm/

## Definition and Usage
`::before` is one of the CSS pseudo-elements selectors, which are used to style specified parts of an element. In this case, we can insert content before some HTML element from CSS. Although we will see the content in the page, it is not part of the Document Object Model (DOM), which means that we cannot manipulate it from JavaScript.

```css
p::before {
  content: "Hello, ";
}
```

```html
<p>World!</p>
```

This will display `Hello, World!` on the page.

String, images, counters, or even an empty string ("", useful for `clearfix`) can be inserted into the `content` attribute.  HTML cannot be inserted.

[See A Whole Bunch of Amazing Stuff Pseudo Elements Can Do!](https://www.w3schools.com/css/css_pseudo_elements.asp)

## Single-colon vs. Double-colon
There's a bit of discussion about the right way of using pseudo-elements: old style single-colon (`:before`), used in CSS specifications 1 and 2, versus CSS3 recommendation, double-colon (`::before`), mainly to "establish a discrimination between pseudo-classes and pseudo-elements". But for compatibility reasons, single-colon is still accepted. IE8 supports the single-colon notation only.

## Additional Resources
- [W3Schools CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
- [CSS-Tricks ::after/::before](https://css-tricks.com/almanac/selectors/a/after-and-before/)
