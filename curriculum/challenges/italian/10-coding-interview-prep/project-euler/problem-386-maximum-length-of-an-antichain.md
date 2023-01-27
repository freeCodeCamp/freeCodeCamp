---
id: 5900f4ef1000cf542c510001
title: 'Problema 386: massima lunghezza di una anticatena'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

Sia $n$ un numero intero e $S(n)$ il set di fattori di $n$.

Un sottoinsieme $A$ di $S(n)$ è chiamato anticatena di $S(n)$ se $A$ contiene solo un elemento o se nessuno degli elementi di $A$ divide nessuno degli altri elementi di $A$.

Per esempio: $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ non è una anticatena di $S(30)$.

$\\{2, 3, 5\\}$ è una anticatena di $S(30)$.

Sia $N(n)$ la lunghezza massima di una anticatena di $S(n)$.

Trova $\sum N(n)$ per $1 ≤ n ≤ {10}^8$

# --hints--

`maximumLengthOfAntichain()` dovrebbe restituire `528755790`.

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
