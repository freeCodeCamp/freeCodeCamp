---
id: 66ed8fc1f45ce3ece4053ead
title: CSS Accessibility Quiz
challengeType: 8
dashedName: quiz-css-accessibility
---

# --description--

Answer all of the questions below correctly to pass the quiz. This quiz tests your understanding of **CSS accessibility**, including best practices for creating accessible web content using CSS.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which CSS property is commonly used to visually hide content while keeping it accessible to screen readers?

#### --distractors--

`display: none;`

---

`visibility: hidden;`

---

`color: transparent;`

#### --answer--

`position: absolute; left: -9999px;`

### --question--

#### --text--

What is the recommended way to ensure sufficient contrast between text and background in your CSS?

#### --distractors--

Using light gray text on a white background.

---

Using vibrant colors without checking contrast ratios.

---

Choosing colors that visually look good to you.

#### --answer--

Use a contrast ratio checker to ensure a minimum ratio of 4.5:1 for normal text.

### --question--

#### --text--

Which CSS pseudo-class can help improve accessibility by indicating when an element is focused, especially for keyboard users?

#### --distractors--

`:hover`

---

`:active`

---

`:checked`

#### --answer--

`:focus`

### --question--

#### --text--

Which CSS property should be used to provide an accessible outline for keyboard navigation focus, rather than removing it?

#### --distractors--

`outline: none;`

---

`border: none;`

---

`display: none;`

#### --answer--

`outline: 2px solid blue;`

### --question--

#### --text--

What is the purpose of using `em` or `rem` units in CSS for font sizes, especially in terms of accessibility?

#### --distractors--

To make fonts look smaller on mobile devices.

---

To ensure pixel-perfect designs across all screen sizes.

---

To increase loading speed of a webpage.

#### --answer--

To allow for scalable text that respects the user’s browser settings.

### --question--

#### --text--

When creating accessible layouts with CSS, why is it important to avoid relying solely on color to convey meaning?

#### --distractors--

Because color is not important for UI design.

---

Because some people don't like colorful designs.

---

Because users with color blindness may not perceive the differences in color.

#### --answer--

Because users with color blindness may not perceive the differences in color.

### --question--

#### --text--

What is the purpose of using the `aria-hidden="true"` attribute alongside CSS?

#### --distractors--

To hide content from the visual display without affecting screen readers.

---

To hide content from both the visual display and screen readers.

---

To add more visual styling to the element.

#### --answer--

To hide content visually but keep it accessible to screen readers.

### --question--

#### --text--

How can the CSS `min-width` and `max-width` properties enhance accessibility on responsive websites?

#### --distractors--

They allow the layout to expand indefinitely.

---

They force all elements to the same size.

---

They have no impact on accessibility.

#### --answer--

They ensure elements resize appropriately, improving readability on different screen sizes.

### --question--

#### --text--

What is the main accessibility issue when using small touch targets (e.g., buttons) with CSS?

#### --distractors--

They make the website load faster.

---

They help users focus on the important content.

---

They make it easier for users to click the buttons.

#### --answer--

They can be difficult to click, especially for users with mobility impairments.

### --question--

#### --text--

Why should developers avoid setting fixed heights for containers with text content in CSS?

#### --distractors--

Because it can make the text overflow the container.

---

Because it prevents users from resizing the browser window.

---

Because it makes websites look less appealing.

#### --answer--

Because users who increase the font size might have text cut off or hidden.

# --hints--

- Use the [WCAG contrast guidelines](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) to check color contrast ratios.
- Avoid using `outline: none;` to remove focus styles unless replacing it with an alternative visual indicator for keyboard users.
- Ensure that content hidden visually is still accessible for screen readers if it's necessary for context.
