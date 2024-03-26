---
id: 6489c96782cf2e4f86f03ae2
title: Die CSS-Kaskade Frage B
challengeType: 15
dashedName: the-cascade-of-css-question-b
---

# --description--

Eine CSS-Deklaration, die spezifischer ist, hat gegenüber weniger spezifischen Deklarationen Vorrang. Inline-Stile, die du in einer früheren Lektion behandelt hast, haben im Vergleich zu Selektoren die höchste Spezifität, während jede Art von Selektor seine eigene Spezifitätsstufe hat, die dazu beiträgt, wie spezifisch eine Deklaration ist. Andere Selektoren tragen zur Spezifizität bei, aber du fokussierst dich nur auf die, die du bis jetzt behandelt hast:

1. ID-Selektoren (spezifischster Selektor)
2. Klassenselektoren
3. Typselektoren

Die Spezifizität wird nur berücksichtigt, wenn ein Element mehrere, sich widersprechende Erklärungen hat, die auf es ausgerichtet sind, sozusagen eine Art Tie-Breaker. Ein ID-Selektor ist immer besser als eine beliebige Anzahl von Klassenselektoren, ein Klassenselektor ist immer besser als eine beliebige Anzahl von Typselektoren, und ein Typselektor ist immer besser als eine beliebige Anzahl von weniger spezifischen Selektoren. Wenn in keiner Deklaration ein Selektor mit einer höheren Spezifität vorhanden ist, schlägt eine größere Menge eines einzelnen Selektors eine kleinere Menge desselben Selektors.

# --question--

## --text--

Welche der folgenden Aussagen ist die richtige Reihenfolge der Spezifität von CSS-Selektoren, von der spezifischsten bis zur unspezifischsten?

## --answers--

Typselektoren, Klassenselektoren, ID-Selektoren

---

ID-Selektoren, Klassenselektoren, Typselektoren

---

Klassenselektoren, Typselektoren, ID-Selektoren

---

ID-Selektoren, Typselektoren, Klassenselektoren

## --video-solution--

2
