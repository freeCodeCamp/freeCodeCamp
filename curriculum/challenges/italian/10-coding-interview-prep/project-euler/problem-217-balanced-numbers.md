---
id: 5900f4461000cf542c50ff58
title: 'Problema 217: Numeri Bilanciati'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

Un numero intero positivo con $k$ cifre decimali è chiamato bilanciato se la somma delle sue prime $⌈\frac{k}{2}⌉$ cifre è pari a quella delle sue ultime $⌈\frac{k}{2}⌉$ dove $⌈x⌉$, detto ceiling di $x$, è il più piccolo intero $≥ x$, quindi $⌈π⌉ = 4$ e $⌈5⌉ = 5$.

Così, per esempio, tutti i palindromi sono bilanciati, come lo è 13722.

Sia $T(n)$ la somma di tutti i numeri bilanciati minori di $10^n$.

Così: $T(1) = 45$, $T(2) = 540$ e $T(5) = 334\\,795\\,890$.

Trova $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` dovrebbe restituire `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
