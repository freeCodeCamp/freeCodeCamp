---
id: 5900f4421000cf542c50ff55
title: 'Problema 214: Catene tozienti'
challengeType: 1
forumTopicId: 301856
dashedName: problem-214-totient-chains
---

# --description--

Sia $φ$ la funzione toziente di Eulero, cioè per un numero naturale $n$, $φ(n)$ è il numero di $k$, $1 ≤ k ≤ n$, per cui $gcd(k,n) = 1$.

Iterando $φ$, ogni numero intero positivo genera una serie decrescente di numeri che termina con 1. Ad es. se iniziamo con 5 viene generata la sequenza 5,4,2,1. Ecco un elenco di tutte le catene con lunghezza 4:

$$\begin{align}    5,4,2,1 & \\\\
   7,6,2,1 & \\\\    8,4,2,1 & \\\\
   9,6,2,1 & \\\\   10,4,2,1 & \\\\
  12,4,2,1 & \\\\   14,6,2,1 & \\\\
  18,6,2,1 & \end{align}$$

Solo due di queste catene iniziano con un primo, la loro somma è 12.

Qual è la somma di tutti i primi inferiori a $40\\,000\\,000$ che generano una catena di lunghezza 25?

# --hints--

`totientChains()` dovrebbe restituire `1677366278943`.

```js
assert.strictEqual(totientChains(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function totientChains() {

  return true;
}

totientChains();
```

# --solutions--

```js
// solution required
```
