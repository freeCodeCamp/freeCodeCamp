---
title: Inline Block
---
## Inline Block
Inline-block is a possible value of the display property.
Elements marked as _inline-block_ behave like inline elements (_spans_, for example), but can have width and height.

You can add inline block to navigation to display horizontally instead of vertically.
Here is an example.
html:

```html
<ul class="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Me</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```
css:
```css
.nav li {
  display: inline-block;
  padding: 20px;
}
```


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://css-tricks.com/almanac/properties/d/display/#inline-block" target="_blank">This is a great article</a> to read up to understand more about creating layouts with inline-block elements.


