---
id: 63ee35370d8d4841c3a7091e
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage E
challengeType: 15
dashedName: css-foundations-question-e
---

# --description--

Kombinatoren erlauben es uns, mehrere Selektoren unterschiedlich zu kombinieren, als sie entweder gruppieren oder verketten, da sie eine Beziehung zwischen den Selektoren aufweisen. Es gibt insgesamt vier Arten von Kombinatoren, aber im Moment werden wir dir nur den Nachkommen-Kombinator zeigen, welcher in CSS durch ein einzelnes Leerzeichen zwischen Selektoren repräsentiert wird. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector.

So würde etwa `.ancestor .child` ein Element mit der `child`-Klasse auswählen, wenn es einen Vorfahren mit der `ancestor`-Klasse hat. Another way to think of it is child will only be selected if it is nested inside of `ancestor`, no matter how deep. Wirf einen kurzen Blick auf das nachfolgende Beispiel und prüfe, ob du erkennen kannst, welche Elemente anhand der angegebenen CSS-Regel ausgewählt werden würden:

```html
<!-- index.html -->

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
```

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

Im vorliegenden Beispiel würden die ersten beiden Elemente mit der `contents`-Klasse (`B` und `C`) ausgewählt werden, das letzte Element (`D`) jedoch nicht. War deine Vermutung richtig?

Es gibt wirklich kein Limit für die Anzahl der Kombinatoren, die du zu einer Regel hinzufügen kannst, also wäre `.one .two .three .four` vollkommen gültig. Dies würde ein Element mit der `four`-Klasse nur dann auswählen, wenn es einen Vorfahren mit der `three`-Klasse hat, und wenn dieser Vorfahr einen eigenen Vorfahren mit der `two`-Klasse hat, und so weiter. Generell möchtest du aber vermeiden, Elemente auszuwählen, die diese Verschachtelungsebene benötigen, da dies ziemlich verwirrend und langwierig werden kann und zu Schwierigkeiten hinsichtlich der Spezifität führen kann.

# --question--

## --text--

What does the descendant combinator do?

## --answers--

Er fasst gewisse Klassen zusammen, die dieselben Deklarationen haben.

---

Er ermöglicht es, ein Element auszuwählen, das dieselbe `class` und dieselbe `id` hat.

---

Es ermöglicht dir, ein Element auf der Grundlage seiner Beziehung zu seinen Vorfahren (Eltern, Großeltern usw.) auszuwählen.


## --video-solution--

3
