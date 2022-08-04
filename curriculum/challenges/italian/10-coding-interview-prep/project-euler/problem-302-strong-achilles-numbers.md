---
id: 5900f49b1000cf542c50ffad
title: 'Problema 302: Forti numeri di Achille'
challengeType: 1
forumTopicId: 301956
dashedName: problem-302-strong-achilles-numbers
---

# --description--

Un numero intero positivo $n$ è potente se $p^2$ è un divisore di $n$ per ogni fattore primo $p$ in $n$.

Un numero intero positivo $n$ è una potenza perfetta se $n$ può essere espresso come potenza di un altro numero intero positivo.

Un numero intero positivo $n$ è un numero di Achille se $n$ è potente ma non una potenza perfetta. Ad esempio, 864 e 1800 sono numeri di Achille: $864 = 2^5 \tvolte 3^3$ e $1800 = 2^3 \tvolte 3^2 \tvolte 5^2$.

Chiameremo un numero intero positivo $S$ un numero forte di Achille se sia $S$ che $φ(S)$ sono numeri di Achille. $φ$ denota la funzione toziente di Eulero.

Ad esempio, 864 è un numero forte di Achille: $φ(864) = 288 = 2^5 \tvolte 3^2$. Tuttavia, 1800 non è un numero forte di Achille perché: $φ(1800) = 480 = 2^5 \times 3^1 \times 5^1$.

Ci sono 7 numeri di Achille forti sotto ${10}^4$ e 656 sotto ${10}^8$.

Quanti numeri di Achille forti ci sono sotto ${10}^{18}$?

# --hints--

`strongAchillesNumbers()` dovrebbe restituire `1170060`.

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

# --seed--

## --seed-contents--

```js
function strongAchillesNumbers() {

  return true;
}

strongAchillesNumbers();
```

# --solutions--

```js
// solution required
```
