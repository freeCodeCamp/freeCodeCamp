---
title: A Tag
---
## A Tag

The `<a>` tag or _anchor_ element creates a hyperlink to another page or file. In order to link to a different page or file the `<a>` tag must also contain a `href` attribute, which indicates the link's destination.

The text between the opening and closing `<a>` tags becomes the link. This text should be a meaningful description of the link destination, and not a generic phrase such as 'click here'. This better enables users with screen readers to navigate amongst various links on a page and understand what content each one will link to.

By default, a linked page is displayed in the current browser window unless another target is specified. 

#### Example:

```html
  <a href= "https://guide.freecodecamp.org/">freeCodeCamp</a>
```

An image can also be turned into a link by enclosing the `<img>` tag in an `<a>` tag.

#### Example:

```html
  <a href= "https://guide.freecodecamp.org/"><img src="logo.svg"></a>
```

It is also possible to determine the target of the `<a>` tag. This is done using the `target` attribute. The `target` attribute has the following values available `_blank|_self|_parent|_top|framename`.

`_blank`: Opens the link in a new tab or a new window depending on the user's preferences.
`_self`: Opens the link in same frame (default behaviour).
`_parent`: Opens the link in the parent frame, for example when the user clicks a link in an iframe.
`_top`: Opens the link in the full body of the window.
`framename`: Opens the link in the specified frame.

#### Example:

```html
  <a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a>
```
<a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a><br>
This link is created in the same way as the example code block suggests. Click it to see how it works.
#### More Information:

- <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' target='_blank' rel='nofollow'>The HTML &lt;a&gt; element: MDN</a>
- <a href='https://www.w3schools.com/tags/tag_a.asp' target='_blank' rel='nofollow'>A tag: w3schools</a>
- <a href='http://htmlreference.io/element/a/' target='_blank' rel='nofollow'>A tag: htmlreference.io</a>

