---
id: 648acb0745e79f79650fa2ac
title: The Cascade of CSS Lesson H
challengeType: 15
dashedName: the-cascade-of-css-lesson-h
---

# --description--

The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

Really simply, actually. Whichever rule was the last defined is the winner.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

For an element that has both the `alert` and `warning` classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the `.warning` rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.

# --question--
## --text--

What determines which CSS rule is applied when there are conflicting rules targeting the same element?

## --answers--

The specificity of the CSS rule.

---

The inheritance hierarchy of the element.

---

The presence of classes or IDs on the element.

---

The order in which the rules were defined.

## --video-solution--

4
