---
id: 5900f4161000cf542c50ff29
title: >-
  Problem 170: Finde die größte Pandigitale von 0 bis 9, die durch die Verkettung von Produkten gebildet werden kann
challengeType: 1
forumTopicId: 301805
dashedName: >-
  problem-170-find-the-largest-0-to-9-pandigital-that-can-be-formed-by-concatenating-products
---

# --description--

Nimm die Zahl 6 und multipliziere sie jeweils mit 1273 und 9854:

$$\begin{align}   & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\ \end{align}$$

Durch Verkettung dieser Produkte erhalten wir die 1 bis 9 pandigital 763859124. Wir nennen 763859124 das "verkettete Produkt von 6 und (1273, 9854)". Beachte auch, dass die Verkettung der eingegebenen Zahlen, 612739854, ebenfalls 1 bis 9 pandigital ist.

Dasselbe gilt für die Ziffern 0 bis 9.

Was ist das größte 0 bis 9 pandigitale 10-stellige verkettete Produkt einer ganzen Zahl mit zwei oder mehr anderen Integern, sodass die Verkettung der Eingangszahlen ebenfalls eine 0 bis 9 pandigitale 10-stellige Zahl ist?

# --hints--

`largestPandigital()` sollte `9857164023` zurückgeben.

```js
assert.strictEqual(largestPandigital(), 9857164023);
```

# --seed--

## --seed-contents--

```js
function largestPandigital() {

  return true;
}

largestPandigital();
```

# --solutions--

```js
// solution required
```
