---
id: 6489cf6282cf2e4f86f03ae6
title: Die CSS-Kaskade Frage E
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

Im letzten Beispiel verwenden beide Regeln ID- und Klassenselektoren, so dass keine Regel einen spezifischeren Selektor als die andere verwendet. Die Kaskade prüft dann die Mengen der einzelnen Selektortypen. Beide Regeln haben nur einen ID-Selektor, aber Regel 2 hat mehr Klassenselektoren, daher hat Regel 2 eine höhere Spezifität!

While the `color: red` declaration would take precedence, the `background-color: yellow` declaration would still be applied since there’s no conflicting declaration for it.

# --question--

## --text--

In Anbetracht des aktualisierten CSS-Codes, welcher der folgenden beschreibt das Rendering des `<div class="list" id="subsection"></div>`-Elements?

## --answers--

Textfarbe: Rot, Hintergrundfarbe: Transparent

---

Textfarbe: Rot, Hintergrundfarbe: Gelb

---

Textfarbe: Blau, Hintergrundfarbe: Transparent

---

Textfarbe: Blau, Hintergrundfarbe: Gelb

## --video-solution--

2
