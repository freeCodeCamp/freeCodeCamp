---
id: 6489cf7682cf2e4f86f03ae8
title: The Cascade of CSS Lesson G
challengeType: 15
dashedName: the-cascade-of-css-lesson-g
---

# --description--

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (`color`, `font-size`, `font-family`, etc.) are usually inherited, while most other properties aren’t.

The exception to this is when directly targeting an element, as this always beats inheritance:

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

Despite the `parent` element having a higher specificity with an ID, the `child` element would have the `color: blue` style applied since that declaration directly targets it, while `color: red` from the parent is only inherited.

# --question--

## --text--

Based on the given HTML and CSS code, what would be the color of the `<div class="child"></div>` element?

## --answers--

Red

---

Blue

---

Inherited from the parent element

---

Transparent

## --video-solution--

2
