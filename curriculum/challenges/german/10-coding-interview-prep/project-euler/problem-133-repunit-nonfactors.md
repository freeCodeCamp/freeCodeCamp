---
id: 5900f3f21000cf542c50ff04
title: 'Problem 133: Repunit nonfactors'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

Eine Zahl, die ausschließlich aus Einsen besteht, nennt man Repunit. Wir definieren $R(k)$ als Repunit der Länge $k$; zum Beispiel $R(6) = 111111$.

Wir betrachten Repunits in der Form $R({10}^n)$.

Obwohl $R(10)$, $R(100)$ oder $R(1000)$ nicht durch 17 teilbar sind, ist $R(10000)$ durch 17 teilbar. Es gibt jedoch keinen Wert von n, für den $R({10}^n)$ durch 19 teilbar wäre. Bemerkenswerterweise sind 11, 17, 41 und 73 die einzigen vier Primzahlen unter Hundert, die ein Faktor von $R({10}^n)$ sein können.

Finde die Summe aller Primzahlen unter einhunderttausend, die niemals ein Faktor von $R({10}^n)$ sein wird.

# --hints--

`repunitNonfactors()` sollte `453647705` zurückgeben.

```js
assert.strictEqual(repunitNonfactors(), 453647705);
```

# --seed--

## --seed-contents--

```js
function repunitNonfactors() {

  return true;
}

repunitNonfactors();
```

# --solutions--

```js
// solution required
```
