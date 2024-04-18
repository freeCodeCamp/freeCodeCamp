---
id: 6489cf7682cf2e4f86f03ae8
title: Die CSS-Kaskade Frage G
challengeType: 15
dashedName: the-cascade-of-css-question-g
---

# --description--

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typografie-basierte Eigenschaften (`color`, `font-size`, `font-family`, etc.) werden in der Regel vererbt, während die meisten anderen Eigenschaften nicht vererbt werden.

Eine Ausnahme bildet das direkte Anvisieren eines Elements, da dies immer die Vererbbarkeit übertrifft:

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

Obwohl das `parent`-Element eine höhere Spezifität mit einer ID hat, würde auf das `child`-Element der `color: blue`-Stil angewandt, da diese Deklaration direkt darauf abzielt, während `color: red` vom übergeordneten Element nur vererbt wird.

# --question--

## --text--

Basierend auf dem gegebenen HTML- und CSS-Code, was wäre die Farbe des `<div class="child"></div>`-Elements?

## --answers--

Rot

---

Blau

---

Inherited from the parent element

---

Transparent

## --video-solution--

2
