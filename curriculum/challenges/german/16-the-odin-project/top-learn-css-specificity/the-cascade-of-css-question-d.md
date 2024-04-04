---
id: 6489cf5882cf2e4f86f03ae5
title: Die CSS-Kaskade Frage D
challengeType: 15
dashedName: the-cascade-of-css-question-d
---

# --description--

Jetzt wollen wir die Dinge ein wenig ändern:

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

Auf der Grundlage des geänderten HTML- und CSS-Codes würde das `<div class="list" id="subsection"></div>`-Element in welcher Farbe dargestellt werden?

## --answers--

orange

---

rot

---

blau

---

cyan

## --video-solution--

3
