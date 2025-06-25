---
id: 66ed8ffcf45ce3ece4053eb5
title: CSS Positioning Quiz
challengeType: 8
dashedName: quiz-css-positioning
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is NOT a valid value for the `position` property?

#### --distractors--

`fixed`

---

`absolute`

---

`relative`

#### --answer--

`above`

### --question--

#### --text--

What is the main purpose of the `float` property in CSS?

#### --distractors--

Floats are used to remove an element from its normal flow on the page and automatically position it in the upper right hand side of the webpage.

---

Floats are used to remove an element from its normal flow on the page and position it to the top of its container.

---

Floats are used to remove an element from its normal flow on the page and automatically position it to the bottom right hand side of webpage.

#### --answer--

Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container.

### --question--

#### --text--

Which of the following is an example making a box element float to the left?

#### --distractors--

```css
.box {
  left: float;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

---

```css
.box {
  position: float-left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

---

```css
.box {
  float: left-side;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

#### --answer--

```css
.box {
  float: left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

### --question--

#### --text--

What is the role of the `clear` property?

#### --distractors--

It is used to determine if an element needs to be moved to the bottom of the page.

---

It is used to determine if an element needs to be completely cleared from the page.

---

It is used to determine if an element needs to be fixed to the top of the page.

#### --answer--

It is used to determine if an element needs to be moved below the floated content.

### --question--

#### --text--

Which CSS property is used to control the vertical stacking order of positioned elements that overlap on the page?

#### --distractors--

`position`

---

`bg-green`

---

`float`

#### --answer--

`z-index`

### --question--

#### --text--

Which of the following is the correct syntax for relative positioning?

#### --distractors--

```css
.relative {
  position: relative-position;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative-position: relative;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative: position;
  top: 30px;
  left: 30px;
}
```

#### --answer--

```css
.relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

### --question--

#### --text--

Which CSS property would you use to fix an element at a certain position on the page so that it does not move when scrolling occurs?

#### --distractors--

`position: no-scroll;`

---

`position: relative;`

---

`display: block;`

#### --answer--

`position: fixed;`

### --question--

#### --text--

What does absolute positioning do to an element?

#### --distractors--

Absolute positioning is used to determine if an element needs to be moved below the floated content.

---

Absolute positioning is used to position the element within the normal document flow.

---

Absolute positioning is used to control the vertical stacking order of positioned elements that overlap on the page.

#### --answer--

Absolute positioning allows you to take an element out of the normal document flow, making it behave independently from other elements.

### --question--

#### --text--

Which of the following is NOT a valid property that you can use for absolute positioning?

#### --distractors--

`right`

---

`bottom`

---

`top`

#### --answer--

`side`

### --question--

#### --text--

What is the key difference between relative and absolute positioning?

#### --distractors--

Absolute positioning sets the element in a sticky position while relative positioning takes an element out of the normal document flow.

---

Relative positioning sets the element in a fixed position while absolute positioning takes an element out of the normal document flow.

---

Absolute positioning positions the element within the normal document flow while relative positioning takes an element out of the normal document flow.

#### --answer--

Relative positioning positions the element within the normal document flow while absolute positioning takes an element out of the normal document flow.

### --question--

#### --text--

Which of the following is an example of positioning a box in the upper left hand corner of the page?

#### --distractors--

```css
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

#### --answer--

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

### --question--

#### --text--

Which positioning method allows an element to stick to a defined position only when you scroll past a certain point?

#### --distractors--

Float positioning.

---

Fixed positioning.

---

Absolute positioning.

#### --answer--

Sticky positioning.

### --question--

#### --text--

Which of the following is a correct example of using sticky positioning?

#### --distractors--

```css
.box {
  sticky: position;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-top;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

#### --answer--

```css
.box {
  position: sticky;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

### --question--

#### --text--

What is the difference between sticky and fixed positioning?

#### --distractors--

Sticky elements can only be used in table layouts while fixed elements can be used in any type of CSS layout.

---

Sticky elements will always remain in the same position while fixed elements will stick to a certain point then behave like relative elements.

---

Fixed elements will be positioned relative to its normal position while sticky elements will only stick to a certain point then behave like relative elements.

#### --answer--

Fixed elements will remain in the same position on the screen while sticky elements will only stick to a certain point then behave like relative elements.

### --question--

#### --text--

What problem did the `clearfix` hack solve when working with floats?

#### --distractors--

The `clearfix` hack helped solve the issue of floated elements being removed from the normal document flow and being placed in a fixed position on the page.

---

The `clearfix` hack helped solve the issue of floated elements not being responsive in mobile and tablet layouts.

---

The `clearfix` hack helped solve the issue of floated elements disappearing from the page.

#### --answer--

The `clearfix` hack helped solve the issue of overlaps and collapsing in the layouts when multiple floated elements were stacked next to each other.

### --question--

#### --text--

Which of the following is a correct example for using the `clearfix` hack?

#### --distractors--

```css
.clearfix::before {
  position: fixed;
  top: 0;
  width: 100%;
  clear: both;
}
```

---

```css
.clearfix::after {
  position: relative;
  top: 30px;
  left: 30px;
  clear: all;
}
```

---

```css
.clearfix::before {
  top: 30px;
  clear: none;
}
```

#### --answer--

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### --question--

#### --text--

What is static positioning?

#### --distractors--

This is used to remove an element from its normal flow on the page and automatically position it in the upper right hand side of the webpage.

---

This allows you to take an element out of the normal document flow, making it behave independently from other elements.

---

This allows an element to stick to a defined position only when you scroll past a certain point.

#### --answer--

This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.

### --question--

#### --text--

Which of the following is an example of setting the navbar to the top of the page using fixed positioning?

#### --distractors--

```css
.navbar {
  fixed: top;
  top: 0;
  width: 100%;
}
```

---

```css
.navbar {
  upper: fixed;
  width: 100%;
}
```

---

```css
.navbar {
  position: fixed-top;
  top: 0;
  width: 100%;
}
```

#### --answer--

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

### --question--

#### --text--

Which of the following is a valid value to use for the `z-index` property?

#### --distractors--

`12.0`

---

`none`

---

`up`

#### --answer--

`1`

### --question--

#### --text--

Which of the following is the default value of the `position` property?

#### --distractors--

`inherit`

---

`initial`

---

`relative`

#### --answer--

`static`

## --quiz--

### --question--

#### --text--

Which `position` value lets you adjust an element's position with `top` and `left` while keeping it within the normal document flow?

#### --distractors--

`position: absolute;`

---

`position: static;`

---

`position: fixed;`

#### --answer--

`position: relative;`

### --question--

#### --text--

How does an element with `position: sticky;` initially behave?

#### --distractors--

It behaves like a `fixed` element until a scroll position is reached.

---

It is always removed from the normal document flow.

---

It behaves like an `absolute` element within its parent.

#### --answer--

It behaves like a `relative` element until a specified scroll position is met.

### --question--

#### --text--

Which of the following demonstrates a valid and effective use of the `z-index` property to make `.box-two` appear on top of `.box-one`?

#### --distractors--

```css
.box-one {
  position: static;
  z-index: 2;
}
.box-two {
  position: static;
  z-index: 1;
}
```

---

```css
.box-one {
  position: absolute;
  stack-order: 1;
}
.box-two {
  position: absolute;
  stack-order: 2;
}
```

---

```css
.box-one {
  float: left;
  z-index: 1;
}
.box-two {
  float: left;
  z-index: 2;
}
```

#### --answer--

```css
.box-one {
  position: absolute;
  z-index: 1;
}
.box-two {
  position: absolute;
  z-index: 2;
}
```

### --question--

#### --text--

What is the `z-index` property used for in CSS?

#### --distractors--

It sets the zoom level of the page.

---

It controls the horizontal alignment of elements within a flex container.

---

It defines the spacing between an element's content and its border.

#### --answer--

It controls the vertical stacking order of positioned elements that overlap.

### --question--

#### --text--

Which CSS property and value would you use to make an element stay at a fixed position of the page, even when the user scrolls?

#### --distractors--

`position: relative;`

---

`position: sticky;`

---

`position: static;`

#### --answer--

`position: fixed;`

### --question--

#### --text--

Which of the code examples is a correct use of the `z-index` property to place an overlay above other content?

#### --distractors--

```css
.overlay {
  z-index: 5;
  background-color: black;
}
```

---

```css
.overlay {
  display: block;
  z-layer: 1;
  background-color: black;
}
```

---

```css
.overlay {
  float: left;
  z-index: 2;
  background-color: black;
}
```

#### --answer--

```css
.overlay {
  position: absolute;
  z-index: 10;
  background-color: black;
}
```

### --question--

#### --text--

Which CSS property is used to control whether an element should be moved below floated elements?

#### --distractors--

`float`

---

`overflow`

---

`display`

#### --answer--

`clear`

### --question--

#### --text--

How will an element with `position: relative;` and `bottom: 25px;` be moved?

#### --distractors--

It will move 25px down from its normal position.

---

It will move 25px to the right of its normal position.

---

It will be positioned 25px from the bottom of the viewport.

#### --answer--

It will move 25px up from its normal position.

### --question--

#### --text--

The `z-index` property will only affect elements that have what CSS property applied?

#### --distractors--

A `float` value other than `none`.

---

A `display` value of `inline-block`.

---

A `background-color` set.

#### --answer--

A `position` value other than `static`.

### --question--

#### --text--

What would be the effect of applying `float: right;` to a logo in a header?

#### --distractors--

The logo would be aligned to the right, but would remain in the normal document flow, preventing other content from wrapping.

---

The logo would be taken out of the flow and positioned on the right side of the entire browser viewport, not its container.

---

The logo would become a block-level element that takes up the full width of the header, pushing other elements below it.

#### --answer--

The logo would be removed from its normal flow and placed on the right side of its container, with other content wrapping around it.

### --question--

#### --text--

Which of the following is an example of making a `.header` element become fixed to the top of the viewport once it is scrolled to?

#### --distractors--

```css
.header {
  position: fixed;
  top: 0;
}
```

---

```css
.header {
  position: relative;
  top: 0;
}
```

---

```css
.header {
  position: absolute;
  top: 0;
}
```

#### --answer--

```css
.header {
  position: sticky;
  top: 0;
}
```

### --question--

#### --text--

What is the specific purpose of `clear: both;` in CSS?

#### --distractors--

It cancels out the `float` property on the element itself, returning it to the normal document flow.

---

It removes any `clear` properties that were inherited from a parent element, restoring the default floating behavior.

---

It only clears floated elements that are on the right side, allowing left-floated elements to remain as they are.

#### --answer--

It ensures the element is moved below any floated elements that appear before it on both the left and right sides.

### --question--

#### --text--

Given the following code, how will `.child` be positioned?

```css
.parent {
  /* No position property set */
  height: 200px;
}
.child {
  position: absolute;
  top: 10px;
}
```

#### --distractors--

It will be positioned 10px from the top of the `.parent` element, as `absolute` positioning is always relative to the direct parent.

---

It will remain in its default static position because the `absolute` value is invalid without a `z-index` property.

---

It will be positioned 10px from the top of the browser window, remaining fixed in place even when the user scrolls the page.

#### --answer--

It will be positioned 10px from the top of the initial containing block, such as the `<body>`, because its parent is not positioned.

### --question--

#### --text--

What effect will the following CSS have on the `.box` element?

```css
.box {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

#### --distractors--

The element will remain in its normal flow but will be indented by 50px from the top and left, pushing other elements away.

---

The element will be fixed to the viewport and will stay 50px from the top and 50px from the left, even when the page is scrolled.

---

The element will be positioned relative to its own starting point, moving 50px down and 50px to the right without leaving the document flow.

#### --answer--

The element will be taken out of the normal flow and placed 50px from the top and 50px from the left of its nearest positioned ancestor.

### --question--

#### --text--

Which of the following `position` values removes an element entirely from the document's normal flow?

#### --distractors--

`position: static;`

---

`position: relative;`

---

`position: inherit;`

#### --answer--

`position: absolute;`

### --question--

#### --text--

Given a `.parent` and a `.child` element, which CSS snippet will correctly position the `.child` 20px from the top left corner of the `.parent` element?

#### --distractors--

```css
.parent {
  /* position: static; by default */
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  position: relative;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  float: left;
  top: 20px;
  left: 20px;
}
```

#### --answer--

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

### --question--

#### --text--

What is the difference between `static` and `relative` positioning?

#### --distractors--

`static` positioning removes an element from the document flow, while `relative` positioning keeps it in the flow.

---

An element with `position: static;` can be offset with the `top` and `left` properties, while `position: relative;` cannot.

---

`static` positioning is for block-level elements, while `relative` positioning is only intended for inline elements.

#### --answer--

Both keep an element in the normal document flow, but `relative` allows the element to be offset from its original position.

### --question--

#### --text--

Which CSS snippet correctly floats an image to the left, allowing the following paragraph text to wrap around its right side?

#### --distractors--

```css
.image {
  position: absolute;
  left: 0;
}
```

---

```css
.image {
  display: inline-block;
}
```

---

```css
.image {
  text-align: left;
}
```

#### --answer--

```css
.image {
  float: left;
}
```

### --question--

#### --text--

What is the difference between `absolute` and `fixed` positioning?

#### --distractors--

`absolute` positioning is relative to the viewport, while `fixed` positioning is relative to the nearest positioned ancestor.

---

`absolute` positioning keeps the element in the normal document flow, while `fixed` positioning removes it from the flow.

---

Both are positioned relative to the viewport, but `fixed` elements will scroll with the page while `absolute` elements will not.

#### --answer--

`absolute` positioning is relative to the nearest positioned ancestor, while `fixed` positioning is relative to the browser viewport.

### --question--

#### --text--

What is the default `position` value for all HTML elements?

#### --distractors--

`position: relative;`

---

`position: absolute;`

---

`position: fixed;`

#### --answer--

`position: static;`

