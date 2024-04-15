---
id: 63ee352b0d8d4841c3a7091c
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage C
challengeType: 15
dashedName: css-foundations-question-c
---

# --description--

Was ist, wenn du zwei Gruppen von Elementen hast, die einige ihrer Stil-Deklarationen gemeinsam haben?

```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

Unsere beiden `.read`- und `.unread`-Selektoren haben die `color: white;`- und `background-color: black;`-Deklarationen gemeinsam, verfügen aber ansonsten über mehrere eigene, einzigartige Deklarationen. Um Wiederholungen zu vermeiden, kannst du diese beiden Selektoren in einer durch Komma getrennten Liste zusammenfassen:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

Beide oben genannten Beispiele (mit und ohne Gruppierung) führen zu demselben Ergebnis, aber das zweite Beispiel reduziert die Wiederholung von Deklarationen und macht es einfacher, entweder die `color` oder die `background-color` für beide Klassen auf einmal zu bearbeiten.

# --question--

## --text--

Wie würdest du eine einzige Regel auf zwei verschiedene Selektoren, `.red-box` und `.yellow-box`, anwenden?

## --answers--

```css
.red-box,
.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box {
  width: 25px;
  height: 25px;
}

.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box { 
  width: 25px;
  .yellow-box {
    height: 25px;
  }
}
```

## --video-solution--

1
