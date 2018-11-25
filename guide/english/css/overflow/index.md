---
title: Overflow
---
# Overflow

The `overflow` property specifies what happens if content overflows an element's box (this property only works for block elements with a specified height).

This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

For example, a given block-level element (`<div>`) set to 300px wide, that contains an image that is 400px wide. The image will stick out of the div and be visible by default. However, if the overflow value is set to hidden, the image will cut off at 300px.

## Values

* `visible`: This is the default value of the property. Content is not clipped when it's bigger than the box.
* `hidden`: Overflowing content will be hidden.
* `scroll`: Similar to hidden, but users will be able to scroll through the hidden content.
* `auto`: If the content proceeds outside its box, then that content will be hidden, whilst a scrollbar should be visible for users to read the rest of the content.
* `initial`: Uses the default value which is visible.
* `inherit`: Sets the overflow to the value of its parent element.

## Examples

### Visible:
```css
.box-element { overflow: visible; }
```

### Hidden:
```css
.box-element { overflow: hidden; }
```

### Scroll:
```css
.box-element { overflow: scroll; }
```

### Auto:
```css
.box-element { overflow: auto; }
```

## overflow-x and overflow-y

* `overflow-x`: Allows the user to scroll through the content that extends beyond the height of the box element.
* `overflow-y`: Allows the user to scroll through the content that extends beyond the width of the box.

```css
  .box-element {
    overflow-x: scroll;
    overflow-y: auto;
  }
```

If the content overflows the Y-axis, then that content will be hidden, whilst a scrollbar should be visible for users to read the rest of the content.

#### More Information:

CSS-Tricks: <a href='https://css-tricks.com/almanac/properties/o/overflow/' target='_blank' rel='nofollow'>overflow</a>
