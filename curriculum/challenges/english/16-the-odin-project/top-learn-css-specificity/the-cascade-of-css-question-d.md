---
id: 6489cf5882cf2e4f86f03ae5
title: The Cascade of CSS Question D
challengeType: 15
dashedName: the-cascade-of-css-question-d
---

# --description--

Now, let’s change things a little bit:

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class.

# --question--

## --text--

Based on the modified HTML and CSS code, which color would the `<div class="list" id="subsection"></div>` element be rendered as?

## --answers--

orange

---

red

---

blue

---

cyan

## --video-solution--

3
