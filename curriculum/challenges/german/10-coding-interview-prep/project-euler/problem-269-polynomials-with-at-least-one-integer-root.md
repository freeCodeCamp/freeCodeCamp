---
id: 5900f4791000cf542c50ff8c
title: 'Problem 269: Polynomials with at least one integer root'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

Eine Wurzel oder Nullstelle eines Polynoms $P(x)$ ist eine Lösung der Gleichung $P(x) = 0$.

Definiere $P_n$ als das Polynom, dessen Koeffizienten die Ziffern von $n$ sind.

Zum Beispiel: $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

Das können wir sehen:

- $P_n(0)$ ist die letzte Ziffer von $n$,
- $P_n(1)$ ist die Summe der Ziffern von $n$,
- $Pn(10)$ ist $n$ selbst.

Definiere $Z(k)$ als die Anzahl der positiven ganzen Zahlen $n$, die nicht größer als $k$ sind und für die das Polynom $P_n$ mindestens eine ganzzahlige Wurzel hat.

Es kann überprüft werden, dass $Z(100\\,000)$ 14696 ist.

Was ist $Z({10}^{16})$?

# --hints--

`polynomialsWithOneIntegerRoot()` sollte `1311109198529286` zurückgeben.

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
