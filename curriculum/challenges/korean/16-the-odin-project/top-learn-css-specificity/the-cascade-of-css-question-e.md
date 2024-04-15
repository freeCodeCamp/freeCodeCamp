---
id: 6489cf6282cf2e4f86f03ae6
title: The Cascade of CSS Question E
challengeType: 15
dashedName: the-cascade-of-css-question-e
---

# --description--

```css
/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
#subsection .main .list {
  color: red;
}
```

In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!

While the `color: red` declaration would take precedence, the `background-color: yellow` declaration would still be applied since there’s no conflicting declaration for it.

# --question--

## --text--

Considering the updated CSS code, which of the following describes the rendering of the `<div class="list" id="subsection"></div>` element?

## --answers--

Text color: Red, Background color: Transparent

---

Text color: Red, Background color: Yellow

---

Text color: Blue, Background color: Transparent

---

Text color: Blue, Background color: Yellow

## --video-solution--

2
