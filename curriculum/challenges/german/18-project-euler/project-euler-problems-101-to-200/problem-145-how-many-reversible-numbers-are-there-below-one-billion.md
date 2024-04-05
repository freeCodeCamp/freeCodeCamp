---
id: 5900f3fd1000cf542c50ff10
title: 'Problem 145: Wie viele umkehrbare Zahlen gibt es unter einer Milliarde?'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

Einige positive Integer $n$ haben die Eigenschaft, dass die Summe [ $n + Umkehrung(n)$ ] ausschließlich aus ungeraden (dezimalen) Ziffern besteht. Beispiel: $36 + 63 = $99 und $409 + 904 = $1313. Wir nennen solche Zahlen umkehrbar; 36, 63, 409 und 904 sind also umkehrbar. Führende Nullen sind weder in $n$ noch in $reverse(n)$ erlaubt.

Es gibt 120 umkehrbare Zahlen unter eintausend.

Wie viele umkehrbare Zahlen gibt es unter einer Milliarde (${10}^9$)?

# --hints--

`reversibleNumbers()` sollte `608720` zurückgeben.

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
