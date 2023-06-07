---
id: 5900f5061000cf542c510017
title: 'Problema 409: Nim Extreme'
challengeType: 1
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

Sia $n$ un numero intero positivo. Considera le posizioni nim dove:

- Ci sono $n$ pile non vuote.
- Ogni pila ha dimensioni inferiori a $2^n$.
- Nessuna coppia di pile ha la stessa dimensione.

Sia $W(n)$ il numero di posizioni nim vincenti che soddisfano le condizioni di cui sopra (una posizione vince se il primo giocatore ha una strategia vincente).

For example, $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$ and $W(100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$.

Trova $W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`nimExtreme()` dovrebbe restituire `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```
