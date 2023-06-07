---
id: 5900f4b41000cf542c50ffc7
title: 'Problem 328: Suche nach den niedrigsten Kosten'
challengeType: 1
forumTopicId: 301985
dashedName: problem-328-lowest-cost-search
---

# --description--

Wir versuchen, eine versteckte Zahl aus der Menge der ganzen Zahlen {1, 2, ..., $n$} zu finden, indem wir Fragen stellen. Jede Zahl (Frage), die wir stellen, hat <u>Kosten in Höhe der nachgefragten Zahl</u> und wir erhalten eine von drei möglichen Antworten:

- "Deine Schätzung ist niedriger als die versteckte Zahl", oder
- "Ja, das ist es!", oder
- "Deine Schätzung ist höher als die versteckte Zahl".

Angesichts des Wertes von $n$ minimiert eine optimale Strategie die Gesamtkosten (d.h. die Summe aller gestellten Fragen) <u>für den schlimmstmöglichen Fall</u>. Z.B.

Wenn $n = 3$ ist, ist das Beste, was wir tun können, natürlich die Frage nach der Zahl "<strong>2</strong>". Die Antwort führt uns sofort zu der versteckten Zahl (mit Gesamtkosten = 2).

Wenn $n = 8$, könnten wir entscheiden, die "binäre Suche" als Strategiemethode zu verwenden: Unsere erste Frage würde lauten "<strong>4</strong>" und, wenn die versteckte Zahl höher ist als 4, benötigen wir eine oder zwei zusätzliche Fragen. Unsere zweite Frage lautet "<strong>6</strong>". Wenn die versteckte Zahl immer noch höher als 6 ist, brauchen wir eine dritte Frage, um zwischen 7 und 8 zu unterscheiden. Unsere dritte Frage lautet also "<strong>7</strong>", und die Gesamtkosten für dieses Worst-Case-Szenario betragen 4 $ + 6 + 7 = \mathbf{\color{red}{17}}$.

Wir können die Worst-Case-Kosten für $n = 8$ deutlich verbessern, indem wir "<strong>5</strong>" als erste Frage stellen. Wenn uns gesagt wird, dass die verborgene Zahl höher als 5 ist, lautet unsere zweite Frage "<strong>7</strong>", dann wissen wir mit Sicherheit, wie die verborgene Zahl lautet (bei Gesamtkosten von $5 + 7 = \mathbf{\color{blue}{12}}$). Wenn uns gesagt wird, dass die verborgene Zahl kleiner als 5 ist, lautet unsere zweite Frage "<strong>3</strong>", und wenn die verborgene Zahl kleiner als 3 ist, lautet unsere dritte Frage "<strong>1</strong>", was Gesamtkosten von 5 $ + 3 + 1 = {mathbf{\color{blue}{9}}$ ergibt. Da $\mathbf{\color{blue}{12 > 9}}$, sind die Worst-Case-Kosten für diese Strategie <strong><span style="color: red;">12</span></strong>. Das ist besser als das, was wir zuvor mit der "binary search" Strategie erreicht haben; es ist also besser als oder gleichwertig mit jeder anderen Strategie. Also, haben wir tatsächlich nur eine optimale Strategie für $n = 8$ beschrieben.

Lasse $C(n)$ die schlimmsten Kosten sein, die durch eine optimale Strategie für $n$, wie oben beschrieben, erreicht werden. Somit ist $C(1) = 0$, $C(2) = 1$, $C(3) = 2$ und $C(8) = 12$.

Ebenso $C(100) = 400$ und $\displaystyle\sum_{n = 1}^{100} C(n) = 17575$.

Finde $\displaystyle\sum_{n = 1}^{200\\,000} C(n)$.

# --hints--

`lowestCostSearch()` sollte `260511850222` zurückgeben.

```js
assert.strictEqual(lowestCostSearch(), 260511850222);
```

# --seed--

## --seed-contents--

```js
function lowestCostSearch() {

  return true;
}

lowestCostSearch();
```

# --solutions--

```js
// solution required
```
