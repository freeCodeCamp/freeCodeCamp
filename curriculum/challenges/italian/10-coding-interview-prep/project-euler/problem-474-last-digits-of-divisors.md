---
id: 5900f5471000cf542c510059
title: 'Problema 474: Ultime cifre di divisori'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

Per un numero intero positivo $n$ e cifre $d$ definiamo $F(n, d)$ come il numero dei divisori di $n$ le cui ultime cifre sono pari a $d$.

Per esempio, $F(84, 4) = 3$. Tra i divisori di 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84), tre di loro (4, 14, 84) hanno l'ultima cifra 4.

Possiamo anche verificare che $F(12!, 12) = 11$ e $F(50!, 123) = 17\\,888$.

Trova $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` dovrebbe restituire `9690646731515010`.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
