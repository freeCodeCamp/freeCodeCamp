---
id: 5900f3f21000cf542c50ff05
title: 'Problem 134: Primzahl-Paar-Verbindungen'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Betrachte die aufeinanderfolgenden Primzahlen $p_1 = 19$ und $p_2 = 23$. Es kann bewiesen werden, dass 1219 die kleinste Zahl ist, so dass die letzten Ziffern mit $p_1$ gebildet werden, während sie auch durch $p_2$ teilbar sind.

Tatsächlich gibt es mit Ausnahme von $p_1 = 3$ und $p_2 = 5$ für jedes Paar von aufeinanderfolgenden Primzahlen $p_2 > p_1$ Werte von $n$, für die die letzten Ziffern durch $p_1$ gebildet werden und $n$ durch $p_2$ teilbar ist. Lass $S$ den kleinsten dieser Werte von $n$ sein.

Finde $\sum{S}$ für jedes Paar der aufeinanderfolgenden Primzahlen mit $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` sollte `18613426663617120` zurückgeben.

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
