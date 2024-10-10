---
id: 66ed8ffcf45ce3ece4053eb5
title: CSS Positioning Quiz
challengeType: 8
dashedName: quiz-css-positioning
---

# --description--

Answer all of the questions below correctly to pass the quiz.

# --quizzes--

## --quiz--

### --question--

#### --text--

The main purpose of the float property in CSS is:

#### --distractors--

(A) To create rounded corners

---

(B) The property is used to align elements to either the left or the right of their container.

---

(C) To center vertically

#### --answer--

(B) The property is used to align elements to either the left or the right of their container.

### --question--

#### --text--

Which CSS property is used to set the stack order of an element?

#### --distractors--

(A) position

---

(B) z-index

---

(C) float

#### --answer--

(B) z-index

### --question--

#### --text--

What happens when you apply the property position: relative to an element in CSS ?

#### --distractors--

(A) It removes the element from document flow

---

(B) It only moves the element relative to the viewport

---

(C) It moves an element relative based on its normal position

#### --answer--

(C) It moves an element relative based on its normal position

### --question--

#### --text--

Which CSS property would you use to fix an element at a certain position on the page so that it does not move when scrolling occurs?

#### --distractors--

(A) position: absolute

---

(B) position: relative

---

(C) position: fixed

#### --answer--

(C) position: fixed

### --question--

#### --text--

If an element has position: absolute, to what is it positioned by default ?

#### --distractors--

(A) The closest ancestor that has position: relative

---

(B) The closest ancestor that has position: absolute

---

(C) The body element

#### --answer--

(A) The closest ancestor that has position: relativer

### --question--

#### --text--

Which positioning method allows an element to stick to a defined position only when you scroll past a certain point?

#### --distractors--

(A) position: sticky

---

(B) position: fixed

---

(C) position: absolute

#### --answer--

(A) position: sticky

### --question--

#### --text--

What would happen if an element had z-index: -1?

#### --distractors--

(A) It will always be in the back of all the other elements on the page

---

(B) It will disappear from view.

---

(C) It will stack on top of all other elements

#### --answer--

(A) It will always be in the back of all the other elements on the page

### --question--

#### --text--

How does a floated element affect the layout of surrounding elements?

#### --distractors--

(A) Other elements are placed in relation to the floated element

---

(B) The floated element is overlapped by surrounding elements that ignore it.

---

(C) Block elements surrounding it flow around the floated element

#### --answer--

(C) Block elements surrounding it flow around the floated element

### --question--

#### --text--

What does an element with position: sticky require for it to work?

#### --distractors--

(A) A position: relative parent element 

---

(B) A declared top, left, right, or bottom property

---

(C) A z-index of 0 or greater

#### --answer--

(B) A declared top, left, right, or bottom property

### --question--

#### --text--

What happens when setting the overflow property of a parent to auto, if one of its children has the property position: sticky?

#### --distractors--

(A) The child element's sticky behaviour is not affected by the overflow property of the parent.

---

(B) The child will lose its sticky behaviour when the parent scrolls.

---

(C) The sticky element will act as if it had position: fixed within the parent

#### --answer--

(B) The child will lose its sticky behaviour when the parent scrolls.

### --question--

#### --text--

Which of the following must be true if a position: sticky element is to work as intended?

#### --distractors--

(A) The height in the parent container must be explicitly set.

---

(B) The sticky element should have one of the top, left, right or bottom value defined.

---

(C) Any sticky element must declare float: left or float: right 

#### --answer--

(B) The sticky element should have one of the top, left, right or bottom value defined.

### --question--

#### --text--

How does a floated element impact the height of its containing block when the containing block does not have an explicit height defined?

#### --distractors--

(A) The height of the containing block is automatically expanded to fit the floated element.

---

(B) The containing block will collapse, completely ignoring its floated element height.

---

(C) The containing block will automatically apply clear: both to fit the floated element 

#### --answer--

(B) The containing block will collapse, completely ignoring its floated element height.

### --question--

#### --text--

Which of the following CSS techniques is an accepted method for preventing a parent container from schrinking in size when it contains only floated elements?

#### --distractors--

(A) Set float: none to the container

---

(B) Adding the property overflow: auto or overflow: hidden to the parent container 

---

(C) Use the position: relative on the parent container 

#### --answer--

(B) Adding the property overflow: auto or overflow: hidden to the parent container

### --question--

#### --text--

When a floating element is followed by non-floating inline elements, it will affect the way in which their layout is performed. 

#### --distractors--

(A) The inline elements will be positioned below the floated element. 

---

(B) Inline elements will wrap around the floated element if there is enough space.

---

(C) The inline elements will overlap the floated element 

#### --answer--

(B) Inline elements will wrap around the floated element if there is enough space.

### --question--

#### --text--

What happens when clear: both is applied to an element following two floated elements -one left and one right - in a container?

#### --distractors--

(A) The element will be positioned to the left of the floated elements.

---

(B) The element will be underneath both floated elements - the float breaks 

---

(C) The element will wrap around the floated elements depending on space 

#### --answer--

(B) The element will be underneath both floated elements - the float breaks 

### --question--

#### --text--

When does an element with z-index: auto create a new stacking context?

#### --distractors--

(A) Combined with position: absolute or position: relative

---

(B) When its parent element has z-index: auto and position: fixed

---

(C) In combination with position: fixed or position: sticky

#### --answer--

(C) In combination with position: fixed or position: sticky

### --question--

#### --text--

If two sibling elements have the same z-index and are both positioned absolutely using position: absolute, how do you determine which one is on top?

#### --distractors--

(A) By changing the document order (HTML position)

---

(B) Adding z-index: auto to the parent container

---

(C) Using position: relative on the parent container

#### --answer--

(A) By changing the document order (HTML position)

### --question--

#### --text--

In what way will the property position: relative exert an effect on sibling elements in regards to document flow?

#### --distractors--

(A) It removes the element from the normal document flow, which affects the positions of siblings.

---

(B) It allows the element to shift without affecting the document flow of sibling elements.

---

(C) It creates a new stacking context which lifts the element in relation to any siblings.

#### --answer--

(B) It allows the element to shift without affecting the document flow of sibling elements.

### --question--

#### --text--

What happens when a position: relative element is nested inside of a position: absolute parent, with top and left values set?

#### --distractors--

(A) It moves relative to the parent element's original position.

---

(B) It moves with respect to the absolute coordinates of the containing parent element

---

(C) It ignores the positioning of the parent and moves relative to its normal position

#### --answer--

(C) It ignores the positioning of the parent and moves relative to its normal position

### --question--

#### --text--

What is the default of an element with position: sticky in terms of stacking context when combined with a z-index value?

#### --distractors--

(A) It will create a new stacking context, and on top of any other element whose z-index is auto.

---

(B) It stays within the stacking context in which it is if z-index is not explicitly defined.

---

(C) It ignores stacking contexts completely and will always end behind every element

#### --answer--

(B) It stays within the stacking context in which it is if z-index is not explicitly defined.

