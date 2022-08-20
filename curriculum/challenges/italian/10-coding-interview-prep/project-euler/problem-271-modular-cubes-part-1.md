---
id: 5900f47b1000cf542c50ff8d
title: 'Problema 271: Cubi modulari, parte 1'
challengeType: 1
forumTopicId: 301921
dashedName: problem-271-modular-cubes-part-1
---

# --description--

Per un numero positivo $n$, definisci $S(n)$ come la somma degli interi $x$, per cui $1 < x < n$ e $x^3 \equiv 1\bmod n$.

Quando $n = 91$, ci sono 8 valori possibili per $x$, cioè: 9, 16, 22, 29, 53, 74, 79, 81. Così, $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = 363 $.

Trova $S(13\\,082\\,761\\,331\\,670\\,030)$.

# --hints--

`modularCubesOne()` dovrebbe restituire `4617456485273130000`.

```js
assert.strictEqual(modularCubesOne(), 4617456485273130000);
```

# --seed--

## --seed-contents--

```js
function modularCubesOne() {

  return true;
}

modularCubesOne();
```

# --solutions--

```js
// solution required
```
