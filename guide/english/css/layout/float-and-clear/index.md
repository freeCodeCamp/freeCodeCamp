---
title: Float and Clear
---
## Float and Clear

The CSS `float` property specifies how an element should float.

The CSS `clear` property specifies what elements can float beside the cleared element and on which side.

### The `float` Property
The `float` property is used for positioning and layout on web pages.

The `float` property can have one of the following values:

`left` - The element floats to the left of its container
`right`- The element floats to the right of its container
`none` - The element does not float (will be displayed just where it occurs in the text). This is default
`inherit` - The element inherits the float value of its parent
In its simplest use, the `float` property can be used to wrap text around images.

#### Float in Picture:
![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "css-tricks-float-img")

```
img {
  float: right;
}
```
This example specifies that an image should float to the right in a page:

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "float img web")
```
img {
  float: left;
}
```
This example specifies that an image should float to the left in a page:

```
img {
  float: none;
}
```

In the following example the image will be displayed just where it occurs in the text (`float: none;`):


### The `clear` Property
The `clear` property specifies what elements can float beside the cleared element and on which side.

The `clear` property can have one of the following values:

`none` - Allows floating elements on both sides. This is default
`left` - No floating elements allowed on the left side
`right`- No floating elements allowed on the right side
`both` - No floating elements allowed on either the left or the right side
`inherit` - The element inherits the clear value of its parent
The most common way to use the `clear` property is after you have used a `float` property on an element.

When clearing floats, you should match the `clear` to the `float`. If an element is floated to the `left`, then you should `clear` to the `left`. Your floated element will continue to `float`, but the cleared element will appear below it on the web page.

#### Example:
![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "unclear footer image")
Source: CSS-TRICS
```
div {
  clear: left;
}
```
![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "clear footer image")
Source: CSS-TRICS

### Clearfix
If you float two child elements within a parent container, the parent requires a clearfix to wrap around both elements. Without a clearfix, the parent is unable to clear its child elements.
```
div:after {
    clear: both;
    display: table;
    content: "";
}
```
Source: CSS TRICKS (https://css-tricks.com/snippets/css/clear-fix/)

### Additional Resources:
- MDN CSS: [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) & [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
- [W3Schools tutorials](https://www.w3schools.com/css/css_float.asp)
- CSS-Tricks: [float](https://css-tricks.com/all-about-floats/) & [clear](https://css-tricks.com/almanac/properties/c/clear/)
