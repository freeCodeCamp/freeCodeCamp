---
id: 5900f47d1000cf542c50ff8f
title: 'Problema 272: Cubi modulari, parte 2'
challengeType: 1
forumTopicId: 301922
dashedName: problem-272-modular-cubes-part-2
---

# --description--

Per un numero positivo $n$, definisci $C(n)$ come il numero degli interi $x$, per cui $1 < x < n$ e $x^3 \equiv 1\bmod n$.

Quando $n = 91$, ci sono 8 valori possibili per $x$, cioè: 9, 16, 22, 29, 53, 74, 79, 81. Così, $C(91) = 8$.

Trova la somma dei numeri positivi $n ≤ {10}^{11}$ per i quali $C(n)=242$.

# --hints--

`modularCubesTwo()` dovrebbe restituire `8495585919506151000`.

```js
assert.strictEqual(modularCubesTwo(), 8495585919506151000);
```

# --seed--

## --seed-contents--

```js
function modularCubesTwo() {

  return true;
}

modularCubesTwo();
```

# --solutions--

```js
// solution required
```
