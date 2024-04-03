---
id: 648acb0745e79f79650fa2ac
title: Die CSS-Kaskade Frage H
challengeType: 15
dashedName: the-cascade-of-css-question-h
---

# --description--

Der letzte Aspekt, das Ende der Fahnenstange, ist der Tie-Breaker des Tie-Breakers. Angenommen, nach Berücksichtigung aller anderen Aspekte gibt es immer noch mehrere widersprüchliche Regeln, die auf ein Element abzielen. Wie bestimmt die Kaskade, welche Regel anzuwenden ist?

Eigentlich ganz einfach. Welche Regel auch immer als letztes definiert wurde, ist der Gewinner.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

Bei einem Element, das sowohl die `alert`- als auch die `warning`-Klasse hat, würde die Kaskade alle anderen Faktoren durchlaufen, einschließlich Vererbung (hier gibt es keine) und Spezifität (keine Regel ist spezifischer als die andere). Da die Regel `.warning` die letzte war, die definiert wurde, und kein anderer Faktor in der Lage war, zu bestimmen, welche Regel anzuwenden ist, wird sie auf das Element angewendet.

# --question--
## --text--

Was bestimmt, welche CSS-Regel angewendet wird, wenn es widersprüchliche Regeln für dasselbe Element gibt?

## --answers--

Die Spezifität der CSS-Regel.

---

Die Hierarchie der Vererbung des Elements.

---

Das Anwesenheit von Klassen oder IDs auf dem Element.

---

Die Reihenfolge, in der die Regeln definiert wurden.

## --video-solution--

4
