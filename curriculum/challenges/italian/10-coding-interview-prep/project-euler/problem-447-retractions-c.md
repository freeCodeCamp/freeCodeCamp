---
id: 5900f52c1000cf542c51003e
title: 'Problema 447: Retrazioni C'
challengeType: 1
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

Per ogni intero $n > 1$, la famiglia di funzioni $f_{n, a, b}$ è definita da:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ per $a, b, x$ integer e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chiameremo $f_{n, a, b}$ una retrazione se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ per ogni $0 \le x \lt n$.

Sia $R(n)$ il numero di retrazioni per $n$.

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

Trova $F({10}^{14})$. Dai la tua risposta nel formato $1\\,000\\,000\\,007$.

# --hints--

`retractionsC()` dovrebbe restituire `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
