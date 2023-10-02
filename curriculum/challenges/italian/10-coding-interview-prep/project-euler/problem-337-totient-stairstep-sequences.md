---
id: 5900f4be1000cf542c50ffd0
title: 'Problema 337: Sequenze tozienti a gradino'
challengeType: 1
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

Sia $\\{a_1, a_2, \ldots, a_n\\}$ una sequenza di interi di lunghezza $n$ tale che:

- $a_1 = 6$
- per ogni $1 ≤ i &lt; n$ : $φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$

$φ$ denota la funzione toziente di Eulero.

Sia $S(N)$ il numero di tali sequenze con $a_n ≤ N$.

Ad esempio, $S(10) = 4$: {6}, {6, 8}, {6, 8, 9} e {6, 10}.

Possiamo verificare che $S(100) = 482\\,073\\,668$ and $S(10\\,000)\bmod {10}^8 = 73\\,808\\,307$.

Trova $S(20\\,000\\,000)\bmod {10}^8$.


# --hints--

`totientStairstepSequences()` dovrebbe restituire `85068035`.

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

# --seed--

## --seed-contents--

```js
function totientStairstepSequences() {

  return true;
}

totientStairstepSequences();
```

# --solutions--

```js
// solution required
```
