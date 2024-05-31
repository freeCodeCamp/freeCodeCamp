---
id: 6489cb0b82cf2e4f86f03ae3
title: The Cascade of CSS Lesson C
challengeType: 15
dashedName: the-cascade-of-css-lesson-c
---

# --description--

Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:

```html
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors.

# --question--

## --text--

Based on the given HTML and CSS code, which color would the `<div class="list subsection"></div>` element be rendered as?

## --answers--

blue

---

red

---

purple

---

black

## --video-solution--

2
