---
id: 5900f3ef1000cf542c50ff01
title: 'Problema 129: divisibilità dei repunit'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

Un numero costituito interamente da uni è chiamato un repunit (ripetizione di uno). Definiamo $R(k)$ come repunit di lunghezza $k$, per esempio $R(6) = 111111$.

Dato che $n$ è un numero positivo intero e $MCD(n, 10) = 1$, si può dimostrare che esiste sempre un valore di $k$ per cui $R(k)$ è divisibile per $n$, $A(n)$ è il minimo valore di $k$ per cui ciò è vero; per esempio, $A(7) = 6$ e $A(41) = 5$.

Il valore minimo di $n$ per cui $A(n)$ eccede per la prima volta 10 è 17.

Trova il valore minimo di $n$ per cui $A(n)$ eccede per la prima volta un milione.

# --hints--

`repunitDivisibility()` dovrebbe restituire `1000023`.

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```
