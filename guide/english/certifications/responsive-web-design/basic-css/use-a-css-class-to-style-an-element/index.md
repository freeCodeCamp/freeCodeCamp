---
title: Use a CSS Class to Style an Element
---
## Use a CSS Class to Style an Element

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

In CSS, we can target the styling of specific elements that match the specified class attribute.

For example, if you have an element with a class of ```button```, then we can style the look & feel as follows:
* Start with a ```.``` (period) character followed by the class name and add your style

```css
.button {
  border: 2px solid black;
  text-align: center;
  display: inline-block;
  padding: 5px 10px;
}
```

Now, the real benefit of using class to style an element is to target multiple elements that have the matching class attribute. For example, if there are 2 buttons on a webpage and they both look similar in style but only differ in size, then we can use a common class to give them common styles and a unique class for each button to give them different size values.

The following HTML code snippet depicts 2 buttons:
* ```Sign up``` button that should have common button style + should be large in size
* ```Login``` button that should have common button style + should be small in size

```html
<div class="button large">Sign up</div>
<div class="button small">Login</div>
```

Using the above defined ```.button``` class as a common style for both buttons, and using ```.large``` and ```.small``` class attributes to give them different sizes, we can achieve the look we want without duplicating our code.

```css
.large {
  font-size: 20px
}
```

```css
.small {
  font-size: 10px
}
```
