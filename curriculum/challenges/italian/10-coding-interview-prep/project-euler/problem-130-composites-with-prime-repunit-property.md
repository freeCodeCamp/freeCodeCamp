---
id: 5900f3ee1000cf542c50ff00
title: 'Problema 130: Numeri compositi con la proprietà dei primi repunit'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

Un numero costituito interamente da uni è chiamato un repunit (ripetizione di uno). Definiamo $R(k)$ come repunit di lunghezza $k$, per esempio $R(6) = 111111$.

Dato che $n$ è un numero positivo intero e $MCD(n, 10) = 1$, si può dimostrare che esiste sempre un valore di $k$ per cui $R(k)$ è divisibile per $n$, $A(n)$ è il minimo valore di $k$ per cui ciò è vero; per esempio, $A(7) = 6$ e $A(41) = 5$.

Ti viene dato per tutti i numeri primi, $p > 5$, che $p − 1$ è divisibile per $A(p)$. Per esempio, quando $p = 41, A(41) = 5$, e 40 è divisibile per 5.

Eppure, ci sono rari valori compositi per cui questo è pure vero, i primi cinque esempi sono 91, 259, 451, 481, e 703.

Trova la somma dei primi venticinque valori compositi di $n$ per cui $MCD(n, 10) = 1$ e $n - 1$ è divisibile per $A(n)$.

# --hints--

`compositeRepunit()` dovrebbe restituire `149253`.

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```
