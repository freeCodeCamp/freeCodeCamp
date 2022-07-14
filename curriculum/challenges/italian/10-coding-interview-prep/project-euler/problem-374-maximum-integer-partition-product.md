---
id: 5900f4e51000cf542c50fff6
title: 'Problema 374: Massimo prodotto di partizione di un numero intero'
challengeType: 1
forumTopicId: 302036
dashedName: problem-374-maximum-integer-partition-product
---

# --description--

Una partizione intera di un numero $n$ è un modo di scrivere $n$ come una somma di numeri interi positivi.

Le partizioni che differiscono solo nell'ordine dei loro addendi sono considerate le stesse. Una partizione di $n$ in parti distinte è una partizione di $n$ in cui ogni parte si verifica al massimo una volta.

Le partizioni in parti distinte di 5 sono:

5, 4 + 1 e 3 + 2.

Sia $f(n)$ il prodotto massimo delle parti di una tale partizione di $n$ in parti distinte e sia $m(n)$ il numero di elementi di una tale partizione di $n$ con quel prodotto.

Quindi $f(5) = 6$ e $m(5) = 2$.

Per $n = 10$ la partizione con il prodotto più grande è $10 = 2 + 3 + 5$, che dà $f(10) = 30$ e $m(10) = 3$. E il loro prodotto, $f(10) \times m(10) = 30 \times 3 = 90$

Si può verificare che $\sum f(n) \times m(n)$ for $1 ≤ n ≤ 100 = 1\\,683\\,550\\,844\\,462$.

Trova $\sum f(n) \times m(n)$ for $1 ≤ n ≤ {10}^{14}$. Dai la tua risposta modulo $982\\,451\\,653$, il 50 millionesimo primo.

# --hints--

`maximumIntegerPartitionProduct()` dovrebbe restituire `334420941`.

```js
assert.strictEqual(maximumIntegerPartitionProduct(), 334420941);
```

# --seed--

## --seed-contents--

```js
function maximumIntegerPartitionProduct() {

  return true;
}

maximumIntegerPartitionProduct();
```

# --solutions--

```js
// solution required
```
