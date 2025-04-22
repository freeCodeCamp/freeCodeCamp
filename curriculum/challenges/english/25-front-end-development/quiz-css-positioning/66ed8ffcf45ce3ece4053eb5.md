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

What happens to an element with `position: sticky` when it reaches its threshold?

#### --distractors--

It becomes fixed relative to the viewport.

---

It disappears from the document flow.

---

It overlaps all other elements on the page.

#### --answer--

It sticks to its nearest scrollable ancestor until scrolling past the threshold.

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

What is the default value of the `position` property in CSS?

#### --distractors--

`absolute`

---

`relative`

---

`fixed`

#### --answer--

`static`

### --question--

#### --text--

Which CSS property is used to control the stacking order of elements?

#### --distractors--

`position`

---

`display`

---

`float`

#### --answer--

`z-index`

### --question--

#### --text--

What happens to an element with `position: absolute`?

#### --distractors--

It remains in the normal document flow.

---

It sticks to the viewport when scrolling.

---

It overlaps other elements without any control.

#### --answer--

It is removed from the normal document flow and positioned relative to its nearest positioned ancestor.

### --question--

#### --text--

Which value of the `position` property allows an element to move relative to its normal position?

#### --distractors--

`absolute`

---

`fixed`

---

`static`

#### --answer--

`relative`

### --question--

#### --text--

What is the effect of `position: fixed` on an element?

#### --distractors--

It moves the element relative to its parent.

---

It keeps the element in the normal document flow.

---

It positions the element relative to its nearest ancestor.

#### --answer--

It positions the element relative to the viewport and keeps it fixed during scrolling.

### --question--

#### --text--

Which value of the `position` property allows an element to stick to a defined position when scrolling past a certain point?

#### --distractors--

`absolute`

---

`relative`

---

`fixed`

#### --answer--

`sticky`

### --question--

#### --text--

What is the purpose of the `z-index` property in CSS?

#### --distractors--

To control the horizontal alignment of elements.

---

To define the visibility of elements.

---

To set the background color of elements.

#### --answer--

To control the vertical stacking order of overlapping elements.

### --question--

#### --text--

Which of the following is an example of using `position: relative`?

#### --distractors--

```css
.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.box {
  position: fixed;
  top: 0;
  left: 0;
}
```

---

```css
.box {
  position: static;
}
```

#### --answer--

```css
.box {
  position: relative;
  top: 10px;
  left: 10px;
}
```

### --question--

#### --text--

What happens to an element with `position: static`?

#### --distractors--

It is removed from the normal document flow.

---

It overlaps other elements.

---

It sticks to the viewport during scrolling.

#### --answer--

It follows the normal document flow.

### --question--

#### --text--

Which of the following is true about `position: absolute`?

#### --distractors--

It positions the element relative to the viewport.

---

It keeps the element in the normal document flow.

---

It positions the element relative to the document root.

#### --answer--

It positions the element relative to its nearest positioned ancestor.

### --question--

#### --text--

What is the difference between `position: fixed` and `position: sticky`?

#### --distractors--

`fixed` positions the element relative to its parent, while `sticky` positions it relative to the viewport.

---

`fixed` keeps the element in the normal flow, while `sticky` removes it.

---

`fixed` allows scrolling, while `sticky` does not.

#### --answer--

`fixed` positions the element relative to the viewport, while `sticky` positions it relative to its nearest scrollable ancestor.

### --question--

#### --text--

Which of the following is an example of using `z-index`?

#### --distractors--

```css
.box {
  position: static;
  z-index: 10;
}
```

---

```css
.box {
  position: relative;
}
```

---

```css
.box {
  position: absolute;
}
```

#### --answer--

```css
.box {
  position: absolute;
  z-index: 5;
}
```

### --question--

#### --text--

What is the default stacking context in CSS?

#### --distractors--

The `body` element.

---

The `html` element.

---

The `viewport`.

#### --answer--

The root element of the document.

### --question--

#### --text--

Which of the following is true about `position: sticky`?

#### --distractors--

It positions the element relative to the viewport.

---

It removes the element from the normal flow.

---

It keeps the element fixed at all times.

#### --answer--

It positions the element relative to its nearest scrollable ancestor and becomes fixed when scrolling past a threshold.

### --question--

#### --text--

What is the effect of `position: relative` on an element?

#### --distractors--

It removes the element from the normal flow.

---

It positions the element relative to the viewport.

---

It keeps the element fixed during scrolling.

#### --answer--

It offsets the element from its normal position without removing it from the document flow.

### --question--

#### --text--

Which of the following is an example of using `position: fixed`?

#### --distractors--

```css
.box {
  position: relative;
  top: 10px;
  left: 10px;
}
```

---

```css
.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.box {
  position: static;
}
```

#### --answer--

```css
.box {
  position: fixed;
  top: 0;
  left: 0;
}
```

### --question--

#### --text--

What is the purpose of `position: absolute`?

#### --distractors--

To keep the element in the normal flow.

---

To position the element relative to the viewport.

---

To make the element sticky.

#### --answer--

To position the element relative to its nearest positioned ancestor.

### --question--

#### --text--

Which of the following is an example of using `position: sticky`?

#### --distractors--

```css
.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.box {
  position: fixed;
  top: 0;
  left: 0;
}
```

---

```css
.box {
  position: static;
}
```

#### --answer--

```css
.box {
  position: sticky;
  top: 10px;
}
```

### --question--

#### --text--

What is the effect of `z-index: -1` on an element?

#### --distractors--

It makes the element invisible.

---

It positions the element above all other elements.

---

It removes the element from the document flow.

#### --answer--

It positions the element behind other elements with a higher `z-index` value.

### --question--

#### --text--

Which CSS property is used to make an element overlap other elements?

#### --distractors--

`position`

---

`float`

---

`display`

#### --answer--

`z-index`
