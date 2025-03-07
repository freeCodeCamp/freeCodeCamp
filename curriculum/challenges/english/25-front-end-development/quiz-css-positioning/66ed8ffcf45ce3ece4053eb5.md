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

