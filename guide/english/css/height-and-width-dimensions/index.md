---
title: Height and Width Dimensions
---
## Height and Width Dimensions
### Definition
Programmers can use the height and width properties to change the height and width of specific elements. In order for their dimensions to be altered, the `display` property value of these elements must be set to `block` or `inline-block`.

### Syntax

#### Height:

* `height: auto|length|initial|inherit;`
* `min-height: length|initial|inherit;`
* `max-height: none|length|initial|inherit;`

#### Width:

* `width: auto|value|initial|inherit;`
* `min-width: length|initial|inherit;`
* `max-width: none|length|initial|inherit;`

### Usage and Examples

All the properties mentioned above can only have **one** value. 

#### Height:

The `height` property sets the exact height of an element. The value `auto` is the default and it allows the browser to automatically set the height. This is usually determined by how much vertical space the content of an element takes up. The length of the height can be set to fixed in `px`, relative to the nearest parent element's height using the `%` unit, or relative to the viewport's height using the `vh` unit. The `initial` value will have the same effect as the `auto` value whilst the `inherit` value will give the element the same height as its nearest parent element.

**Example:**

```html
<p id="red">Example text</p>
```
```css
p#red {
	margin: 0;
  background-color: red;
  height: 50vh;
	line-height: 50vh;
	text-align:center;
}
```
**Result:**
![Example One](https://image.prntscr.com/image/dbKSQofTThGZRD7FJLyjJQ.png)
The example above uses the `vh` unit for setting the height. This unit is used to set the height of an element relative to the viewport's height. In this case, the red paragraph is given a height of half of the viewport's height so it takes up 50% of the screen. *Note: All default margins must be removed from the body to make the result appear as it should.*

The `min-height` property sets the minimum height that an element must have. This property is useful when vertically resizing a page, since the programmer can prevent an element from shrinking too much and not appearing well. The default value of an element's `min-height` is set to 0. The CSS code below would prevent the paragraph with an `ID` of **example** from shrinking to less than 400px in height.

**Example:**
```css
p#example {
  min-height: 400px;
}
```
The `max-height` property sets the maximum height that an element can reach. This can be useful when you don't want an element to be larger than a specific size. If the element's content has a greater height than the `max-height` value, the content will overflow.

**Example:**
```css
p {
  max-height: 40px;
  background-color: red;
}
```
**Result:**
![Example 3](https://image.prntscr.com/image/eRdqazdUSWO2rdVfcUb5rQ.png)

#### Width:

The CSS width property explanations are exactly the same as the height properties' except they alter the width of an element. Therefore, I will only show a few examples of the usage of these properties below.

**Example:**
```css
p {
  width: 150px;
  background-color: red;
}
```
**Result:**
![Example 4](https://image.prntscr.com/image/x1_khU6TQsmZQznt7YU9qw.png)

*Note: The content doesn't overflow to the right, it only takes up the specified width and then breaks onto the next line.*

**Example:**
```css
p {
  min-width: 50px;
}
```
The code above will simply not allow a paragraph element to shrink horizontally to less than 50px.

**Example:**
```css
p {
  max-width: 300px;
  background-color: red;
}
```
The code above will not allow an element's width to become greater than 300px.

I hope this article has helped you get comfortable with the CSS height and width dimensions. I have included some links below, if you'd like to read more on these properties.

#### More Information:

* CSS height and width dimensions: https://www.w3schools.com/css/css_dimension.asp
* CSS height property: https://www.w3schools.com/cssref/pr_dim_height.asp
* CSS width property: https://css-tricks.com/almanac/properties/w/width/
* CSS lengths: https://developer.mozilla.org/en-US/docs/Web/CSS/length


