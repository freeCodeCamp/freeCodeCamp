---
id: 5900f4a81000cf542c50ffbb
title: 'Problem 316: Zahlen in dezimalen Expansionen'
challengeType: 1
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

Let $p = p_1 p_2 p_3 \ldots$ be an infinite sequence of random digits, selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.

Es ist zu sehen, dass $p$ der reellen Zahl $0.p_1 p_2 p_3 \ldots$ entspricht.

Man sieht auch, dass die Wahl einer zufälligen reellen Zahl aus dem Intervall [0,1) gleichbedeutend ist mit der Wahl einer unendlichen Folge von zufälligen Ziffern aus {0,1,2,3,4,5,6,7,8,9} mit gleicher Wahrscheinlichkeit.

Für eine beliebige positive ganze Zahl $n$ mit $d$ Nachkommastellen, lasse $k$ der kleinste Index sein, bei dem $p_k, p_{k + 1}, \ldots p_{k + d - 1}$ die Nachkommastellen von $n$ sind, und zwar in derselben Reihenfolge.

Lasse außerdem $g(n)$ der Erwartungswert von $k$ sein; es kann bewiesen werden, dass $g(n)$ endlich immer und interessanterweise immer eine ganze Zahl ist.

For example, if $n = 535$, then

for $p = 31415926\mathbf{535}897\ldots$, we get $k = 9$

for $p = 35528714365004956000049084876408468\mathbf{535}4\ldots$, we get $k = 36$

usw. und wir finden, dass $g(535) = 1008$.

Given that $\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$, find $\displaystyle\sum_{n = 2}^{999\\,999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$.

**Hinweis:** $\lfloor x\rfloor$ steht für die Bodenfunktion.

# --hints--

`numbersInDecimalExpansion()` should return `542934735751917760`.

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function numbersInDecimalExpansion() {

  return true;
}

numbersInDecimalExpansion();
```

# --solutions--

```js
// solution required
```
