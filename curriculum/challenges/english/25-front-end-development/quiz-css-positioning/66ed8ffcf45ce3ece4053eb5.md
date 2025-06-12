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

Which position value positions the element according to the normal flow, then offsets it without affecting other elements?

#### --distractors--

`sticky`

---

`absolute`

---

`static`

#### --answer--

`relative`

### --question--

#### --text--

Which position value positions the element relative to the nearest positioned ancestor?

#### --distractors--

`static`

---

`relative`

---

`sticky`

#### --answer--

`absolute`

### --question--

#### --text--

When you apply top: 50% to an absolutely positioned element, what does that 50% refer to?

#### --distractors--

`50% of the element’s own height`

---

`50% of the viewport height`

---

`50% of the nearest ancestor’s width`

#### --answer--

`50% of the nearest positioned ancestor’s height`

### --question--

#### --text--

If you set position: absolute on an inline element (like a <span>), what does its display type become according to the spec?

#### --distractors--

`It remains inline by default`

---

`It becomes display: table`

---

`It becomes a flex container`

#### --answer--

`It’s computed as a block‐level box`

### --question--

#### --text--

How does overflow: hidden on a parent affect a child with position: sticky?

#### --distractors--

`It disables sticky behavior entirely`

---

`It makes the child scroll with the page normally`

---

`It forces the child to act like position: fixed`

#### --answer--

`It confines the sticky behavior so the child only sticks within the parent’s bounds` 

### --question--

#### --text--

Which CSS property—alone, without any z-index—can create a new stacking context?

#### --distractors--

`margin`

---

`border`

---

`position: static`

#### --answer--

`transform` 

### --question--

#### --text--

Which ancestor does an absolutely positioned element use as its containing block?

#### --distractors--

`The root <html> element`

---

`The viewport`

---

`The first element with display: block`

#### --answer--

`The nearest ancestor whose position is not static` 

### --question--

#### --text--

Which of these is ignored by position: fixed when determining its containing block?

#### --distractors--

`The <body> element`

---

`A parent with position: relative`

---

`The root element`

#### --answer--

`All ancestors—position: fixed elements are always relative to the viewport` 

### --question--

#### --text--

If two positioned elements overlap without any z-index specified, what determines which one paints on top?

#### --distractors--

`The element with larger width`

---

`Alphabetical order of their class names`

---

`Their position value (absolute over relative)`

#### --answer--

`Their order in the HTML (later elements paint on top)` 

### --question--

#### --text--

Which CSS snippet correctly centers an absolutely positioned box both horizontally and vertically in its container?

#### --distractors--

```css
.box {
  position: absolute;
  margin: auto;
  width: 50%;
  height: 50%;
}
```

---

```css
.box {
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
}
```

---

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### --answer--

```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### --question--

#### --text--

What does float:right do to an element?

#### --distractors--

`Positions the element at the bottom of its container`

---

`Removes the element from the normal flow and sticks it to the right side of the viewport`

---

`Centers the element horizontally`

#### --answer--

`Places the element on the right side of its container, allowing inline content to wrap around it` 

### --question--

#### --text--

Which values can the clear property take to clear both left and right floats?

#### --distractors--

`clear: all-sides;`

---

`clear: both-sides;`

---

`clear: left-right;`

#### --answer--

`Places the element on the right side of its container, allowing inline content to wrap around it` 

### --question--

#### --text--

What happens when you apply `float: left;` to an element in CSS?

#### --distractors--

`It centers the element horizontally inside its container`  

---

`It aligns the element at the bottom of the container`  

---

`It moves the element to the right side of the container`

#### --answer--

`It removes the element from normal flow and positions it to the left, allowing text to wrap around it`

### --question--

#### --text--

What CSS property can be used to move an element below floated elements?

#### --distractors--

`align`  

---

`offset`

---

`position`

#### --answer--

`clear`

### --question--

#### --text--

Which CSS snippet correctly applies a clearfix hack to fix float collapsing?

#### --distractors--

```css
.clearfix::before {
  content: "";
  display: table;
  clear: both;
}
```

---

```css
.clearfix::after {
  content: "";
  display: inline;
  clear: left;
}
```

---

```css
.clearfix {
  content: "";
  display: block;
}
```

#### --answer--

```css
.clearfix {
  content: "";
  display: block;
  clear: both;
}
```

### --question--

#### --text--

In static positioning, how are elements arranged on the page?

#### --distractors--

`From right to left and bottom to top`

---

`Randomly depending on screen size`

---

`Stacked based on their z-index by default`

#### --answer--

`From top to bottom and left to right, following normal document flow`

### --question--

#### --text--

What effect does position: relative have on an element?

#### --distractors--

`It removes the element from the document flow`

---

`It makes the element behave like fixed positioning`

---

`It prevents the element from moving`

#### --answer--

`It allows offsetting an element while keeping it in the normal document flow`

### --question--

#### --text--

What best describes position: absolute in CSS?

#### --distractors--

`It keeps the element fixed in place when scrolling`

---

`It stacks the element above all others automatically`

---

`It restricts the element inside its parent container always`

#### --answer--

`It removes the element from the normal flow and positions it relative to the nearest positioned ancestor`

### --question--

#### --text--

What happens when an element is given position: fixed?

#### --distractors--

`It scrolls along with the page`

---

`It remains in normal flow but moves slightly with scrolling`

---

`It positions relative to its parent element`

#### --answer--

`It is positioned relative to the viewport and stays fixed during scrolling`

### --question--

#### --text--

Which property combination would you use to make an element stick at 30px from the top of the viewport while scrolling?

#### --distractors--

`position: fixed; bottom: 30px;`  

---

`position: absolute; top: 30px;`  

---

`position: relative; top: 30px;`

#### --answer--

`position: sticky; top: 30px;`
