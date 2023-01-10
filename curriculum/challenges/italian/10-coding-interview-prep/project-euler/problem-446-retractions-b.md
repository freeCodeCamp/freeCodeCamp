---
id: 5900f52c1000cf542c51003d
title: 'Problema 446: Retrazioni B'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

Per ogni intero $n > 1$, la famiglia di funzioni $f_{n, a, b}$ è definita da:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ per $a, b, x$ interi e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chiameremo $f_{n, a, b}$ una retrazione se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ per ogni $0 \le x \lt n$.

Sia $R(n)$ il numero di retrazioni per $n$.

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$.

Trova $F({10}^7)$. Dai la tua risposta nel formato $1\\,000\\,000\\,007$.

# --hints--

`retractionsB()` dovrebbe restituire `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
