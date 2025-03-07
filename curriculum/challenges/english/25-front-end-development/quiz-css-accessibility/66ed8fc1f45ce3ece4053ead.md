---
id: 66ed8fc1f45ce3ece4053ead
title: CSS Accessibility Quiz
challengeType: 8
dashedName: quiz-css-accessibility
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Why do you need to have good color contrast on your webpage?

#### --distractors--

To make the page more vibrant.

---

To meet requirements for search engine optimization (SEO).

---

To make important elements of the page stand out.

#### --answer--

To make the page content accessible and readable.

### --question--

#### --text--

Which of the following tools allows you to enter background and foreground colors and check their contrast ratio?

#### --distractors--

TPGi Color Contrast Analyzer

---

Figma

---

Canva

#### --answer--

WebAIM's Color Contrast Checker

### --question--

#### --text--

Which of the following tools allows you to pick background and foreground colors from a live webpage and check for their contrast ratio?

#### --distractors--

Figma

---

Canva

---

WebAIM's Color Contrast Checker

#### --answer--

TPGi Color Contrast Analyzer

### --question--

#### --text--

Why should you NOT use `display: none` and `visually: hidden` to visually hide content?

#### --distractors--

These methods make it so that only assistive technologies like screen readers can access the hidden content.

---

These methods make it so that the content is only hidden until users move their mouse over the content.

---

These methods do not work with some browsers.

#### --answer--

These methods remove the content from the accessibility tree, making it impossible for screen readers to access the hidden content.

### --question--

#### --text--

What is an accessibility tree?

#### --distractors--

A visual representation of the layout of a webpage.

---

A structure used by screen readers to read the text content of a webpage.

---

A copy of the DOM tree.

#### --answer--

A structure used by screen readers to interpret and interact with the content on a webpage.

### --question--

#### --text--

Which of the following ensures that an image has a minimum width of `400px`, but becomes wider when the viewport width is greater than `1000px`?

#### --distractors--

```css
img {
  width: max(400px, 10vw);
}
```

---

```css
img {
  width: max(400px, 30vw);
}
```

---

```css
img {
  width: max(400px, 20vw);
}
```

#### --answer--

```css
img {
  width: max(400px, 40vw);
}
```

### --question--

#### --text--

Which of the following `scroll-behavior` value allows a smooth scrolling behavior?

#### --distractors--

`auto`

---

`inherit`

---

`revert`

#### --answer--

`smooth`

### --question--

#### --text--

Which of the following features is used to detect the user's animation preference?

#### --distractors--

`prefers-contrast`

---

`display-mode`

---

`animation`

#### --answer--

`prefers-reduce-motion`

### --question--

#### --text--

Which of the following is an accessibility issue of the `placeholder` attribute in an `input` element?

#### --distractors--

Placeholder text prevents screen readers from reading the input label text.

---

Placeholder text prevents screen readers from reading the input value.

---

Placeholder text is too small to be readable.

#### --answer--

Placeholder text can be confused with an actual input value.

### --question--

#### --text--

What does the `hidden` attribute do?

#### --distractors--

It hides content and reveals on hover.

---

It hides content only from the accessibility tree.

---

It hides content visually, but the content is available in the accessibility tree.

#### --answer--

It hides content both visually and from the accessibility tree.
