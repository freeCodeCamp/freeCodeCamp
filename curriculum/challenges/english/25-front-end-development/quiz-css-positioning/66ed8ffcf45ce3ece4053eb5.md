---
id: 66ed8ffcf45ce3ece4053eb5
title: CSS Positioning Quiz
challengeType: 8
dashedName: quiz-css-positioning
---

# --description--

To pass the quiz, you must correctly answer at least 17 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the main purpose of the `float` property in CSS?

#### --distractors--

To create rounded corners.

---

To control opacity.

---

To center vertically.

#### --answer--

To align elements to either the left or the right of their container.

### --question--

#### --text--

Which CSS property is used to set the stack order of an element?

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

What happens when you apply `position: relative` to an element in CSS?

#### --distractors--

It removes the element from document flow.

---

It only moves the element relative to the viewport.

---

It positions the element in a fixed position relative to the viewport.

#### --answer--

It moves the element relative to its default position in the document.

### --question--

#### --text--

Which CSS property would you use to fix an element at a certain position on the page so that it does not move when scrolling occurs?

#### --distractors--

`position: absolute`

---

`position: relative`

---

`display: block`

#### --answer--

`position: fixed`

### --question--

#### --text--

If an element has `position: absolute`, what element is it positioned relatively to?

#### --distractors--

The closest ancestor with `position: fixed`.

---

The closest ancestor with `position: absolute`.

---

The `<body>` element.

#### --answer--

The closest positioned ancestor with `position` set to `relative`, `absolute`, or `fixed`.

### --question--

#### --text--

Which positioning method allows an element to stick to a defined position only when you scroll past a certain point?

#### --distractors--

`position: float`

---

`position: fixed`

---

`position: absolute`

#### --answer--

`position: sticky`

### --question--

#### --text--

Given the following code:

```css
#box1 {
  position: relative;
  z-index: 1;
}

#box2 {
  position: relative;
  z-index: 2;
}

#box3 {
  position: relative;
  z-index: -1;
}
```

How will `#box3` be positioned on the page?

#### --distractors--

It will be stacked above all the other elements on the page.

---

It will disappear from view.

---

It will stay at the bottom corner of the page.

#### --answer--

It will be stacked below all the other elements on the page.

### --question--

#### --text--

How does a floated element affect the layout of surrounding elements?

#### --distractors--

Other elements are placed in relation to the floated element.

---

The surrounding elements ignore the floated element and overlap it.

---

It will shift surrounding elements behind the floated element.

#### --answer--

Block elements surrounding it flow around the floated element.

### --question--

#### --text--

What does an element with `position: sticky` require for it to work?

#### --distractors--

A `position: relative` parent element.

---

A `z-index` value greater than 1.

---

A `z-index` of 0 or greater.

#### --answer--

A declared `top`, `left`, `right`, or `bottom` property.

### --question--

#### --text--

What happens when setting the `overflow` property of a parent to `auto` and one of its children has the property `position: sticky`?

#### --distractors--

The child element's sticky behavior is not affected by the `overflow` property of the parent.

---

The sticky element will maintain its behavior regardless of scrolling.

---

The sticky element will act as if it has `position: fixed` within the parent.

#### --answer--

The child will lose its sticky behavior when the parent scrolls.

### --question--

#### --text--

Which of the following properties is used to offset a positioned element from its normal position?

#### --distractors--

`float`

---

`padding-right`

---

`margin-right`

#### --answer--

`right`

### --question--

#### --text--

How does a floated element impact the height of its containing block when the containing block does not have an explicit height defined?

#### --distractors--

The height of the containing block is automatically expanded to fit the floated element.

---

The height will automatically adapt to fit all the floated elements.

---

The containing block will automatically apply `clear: both` to fit the floated element.

#### --answer--

The containing block will collapse, completely ignoring its floated element height.

### --question--

#### --text--

Which of the following CSS techniques is an accepted method for preventing a parent container from shrinking in size when it contains only floated elements?

#### --distractors--

Set `float: none` to the container.

---

Add `margin: auto` to the parent container.

---

Use the `position: relative` on the parent container.

#### --answer--

Adding the property `overflow: auto` or `overflow: hidden` to the parent container.

### --question--

#### --text--

When a floating element is followed by non-floating inline elements, how will their layout be affected?

#### --distractors--

The inline elements will be positioned below the floated element. 

---

Inline elements will always be on top of the floated element.

---

The inline elements will overlap the floated element.

#### --answer--

Inline elements will wrap around the floated element if there is enough space.

### --question--

#### --text--

What happens when `clear: both` is applied to an element following two floated elements - one left and one right - in a container?

#### --distractors--

The element will be positioned to the left of the floated elements.

---

The element will align between the two floated elements.

---

The element will wrap around the floated elements depending on space.

#### --answer--

The element will be underneath both floated elements - the float breaks.

### --question--

#### --text--

When does an element with `z-index: auto` create a new stacking context?

#### --distractors--

When combined with `position: absolute` or `position: relative`.

---

When its parent element has `z-index: auto` and `position: fixed`.

---

When it is combined with `float: left`, if two sibling elements are of the same `z-index` and absolutely positioned.

#### --answer--

In combination with `position: fixed` or `position: sticky`.

### --question--

#### --text--

If two sibling elements have the same `z-index` and are both positioned absolutely using `position: absolute`, what determines which one is on top?

#### --distractors--

It rearranges the sibling elements in relation to its new position.

---

Adding `z-index: auto` to the parent container.

---

Using `position: relative` on the parent container.

#### --answer--

The document source order (HTML position).

### --question--

#### --text--

In what way will the property `position: relative` exert an effect on sibling elements in regards to document flow?

#### --distractors--

It removes the element from the normal document flow, which affects the positions of siblings.

---

The relative element will move by the parent's top and left properties. 

---

It creates a new stacking context which lifts the element in relation to any siblings.

#### --answer--

It allows the element to shift without affecting the document flow of sibling elements.

### --question--

#### --text--

What happens when a `position: relative` element is nested inside of a `position: absolute` parent, with `top` and `left` values set?

#### --distractors--

It moves relative to the parent element's original position.

---

It moves with respect to the absolute coordinates of the containing parent element.

---

It will never create a new stacking context regardless of the `z-index` value.

#### --answer--

It ignores the positioning of the parent and moves relative to its normal position.

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

