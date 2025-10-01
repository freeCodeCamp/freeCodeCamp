---
id: 68376949899fcbad3c9cac23
title: JavaScript and Accessibility Quiz
challengeType: 8
dashedName: quiz-js-a11y
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which attribute is used for accessibility purposes to indicate if a control is expanded or collapsed?

#### --distractors--

`aria-controlled`

---

`aria-controls`

---

`aria-expands`

#### --answer--

`aria-expanded`

### --question--

#### --text--

Which two attributes can be used in combination with `aria-expanded` to establish a programmatic connection between the controlling element and the element it controls?

#### --distractors--

`aria-labelledBy` and `aria-owns`

---

`aria-controls` and `aria-label`

---

`aria-live` and `aria-owns`

#### --answer--

`aria-controls` and `aria-owns`

### --question--

#### --text--

Which of the following attributes creates a live region on your page which can be used to notify screen reader users of dynamic content changes in the live region as they occur?

#### --distractors--

`aria-live-regions`

---

`aria-lives`

---

`aria-live-region`

#### --answer--

`aria-live`

### --question--

#### --text--

Which of the following `div` elements will be disabled only to people using assistive technologies, such as screen readers?

#### --distractors--

```html
<div role="button" tabindex="-1" aria-disables="true">Edit</div>
```

---

```html
<div role="button" tabindex="-1" aria-disabling="true">Edit</div>
```

---

```html
<div role="button" tabindex="-1" aria-disable="true">Edit</div>
```

#### --answer--

```html
<div role="button" tabindex="-1" aria-disabled="true">Edit</div>
```

### --question--

#### --text--

Which of the following is a valid use of the `aria-expanded` attribute?

#### --distractors--

```html
<button aria-expanded="expand">Menu</button>
```

---

```html
<button aria-expanded="allow">Menu</button>
```

---

```html
<button aria-expanded="set">Menu</button>
```

#### --answer--

```html
<button aria-expanded="true">Menu</button>
```

### --question--

#### --text--

Which attribute is used to create a programmatic relationship between a controlling element and the element it affects on the page?

#### --distractors--

`aria-set`

---

`aria-region`

---

`aria-expanded`

#### --answer--

`aria-controls`

### --question--

#### --text--

Which of the following is NOT a common use case for live regions?

#### --distractors--

Messages that are displayed after an action has been taken (such as an error message or confirmation).

---

Content that updates periodically (such as a ticker, marquee, or countdown timer).

---

General status messages (such as updates about a process).

#### --answer--

Messages that are displayed before an action has been taken (such as a confirmation dialog).

### --question--

#### --text--

Which of the following examples is the correct way to indicate which tab is currently selected?

#### --distractors--

```html
<div role="tablist">
  <button role="tab" aria-selecting="true">Tab 1</button>
  <button role="tab" aria-selecting="false">Tab 2</button>
  <button role="tab" aria-selecting="false">Tab 3</button>
</div>
```

---

```html
<div role="tablist">
  <button role="tab" aria-select="true">Tab 1</button>
  <button role="tab" aria-select="false">Tab 2</button>
  <button role="tab" aria-select="false">Tab 3</button>
</div>
```

---

```html
<div role="tablist">
  <button role="tab" aria-selects="true">Tab 1</button>
  <button role="tab" aria-selects="false">Tab 2</button>
  <button role="tab" aria-selects="false">Tab 3</button>
</div>
```

#### --answer--

```html
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>
```

### --question--

#### --text--

Which of the following is NOT a valid value for the `aria-live` attribute?

#### --distractors--

`off`

---

`polite`

---

`assertive`

#### --answer--

`on`

### --question--

#### --text--

Which of the following `aria-live` attribute values means that the update is very important and has the highest priority?

#### --distractors--

`now`

---

`immediate`

---

`urgent`

#### --answer--

`assertive`

