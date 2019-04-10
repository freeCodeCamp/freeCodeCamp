---
title: Inline Block
---
## Inline Block
inline-block is a possible value of the display property.
Elements marked as _inline-block_ behave like inline elements (_spans_, for example), but can have width and height.

You can add inline-block to navigation so it is displayed horizontally instead of vertically.

HTML:

```html
<ul class="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Me</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

CSS:

```css
.nav li {
  display: inline-block;
  padding: 20px;
}
```

#### More Information:
[CSS-Tricks - inline-block](https://css-tricks.com/almanac/properties/d/display/#inline-block)
