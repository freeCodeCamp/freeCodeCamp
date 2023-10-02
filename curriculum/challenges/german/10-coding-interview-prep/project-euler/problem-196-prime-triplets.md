---
id: 5900f4301000cf542c50ff42
title: 'Problem 196: Primzahldrillinge'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

Erstelle ein Dreieck aus allen positiven Ganzzahligen auf die folgende Art und Weise:

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

Jede positive ganze Zahl hat bis zu acht Nachbarn im Dreieck.

Ein Satz von drei Primzahlen wird als Primzahlentripel bezeichnet, wenn eine der drei Primzahlen die beiden anderen Primzahlen als Nachbarn im Dreieck hat.

In der zweiten Reihe beispielsweise sind die Primzahlen 2 und 3 Elemente eines Primzahlentripels.

Wenn die Reihe 8 berücksichtigt wird, enthält es zwei Primzahlen, die Elemente eines Primzahltripels sind, nämlich 29 und 31. Betrachtet man die Zeile 9, so enthält sie nur eine Primzahl, die ein Element eines Primzahltripletts ist: 37.

Definiere $S(n)$ als Summe der Primzahlen in Reihe $n$, die Elemente eines beliebigen Primzahldrillings sind. Dann gilt $S(8) = 60$ und $S(9) = 37$.

Gegeben ist, dass Folgendes gilt: $S(10000) = 950007619$.

Finde $S(5678027) + S(7208785)$.

# --hints--

`primeTriplets()` sollte `322303240771079940` ausgeben.

```js
assert.strictEqual(primeTriplets(), 322303240771079940);
```

# --seed--

## --seed-contents--

```js
function primeTriplets() {

  return true;
}

primeTriplets();
```

# --solutions--

```js
// solution required
```
