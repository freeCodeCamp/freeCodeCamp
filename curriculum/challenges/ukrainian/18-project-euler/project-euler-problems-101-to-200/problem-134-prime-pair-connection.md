---
id: 5900f3f21000cf542c50ff05
title: 'Завдання 134: з’єднання пар простих чисел'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Розглянемо прості числа $p_1 = 19$ та $p_2 = 23$. Можна довести, що 1219 є найменшим числом, двома останніми цифрами якого є $p_1$, а також ділиться на $p_2$.

За винятком пари $p_1 = 3$ та $p_2 = 5$, для кожної пари послідовних простих чисел $p_2 > p_1$ існують значення $n$, останніми двома цифрами яких є $p_1$, а $n$ ділиться на $p_2$. Нехай $S$ є найменшим із таких значень $n$.

Знайдіть $\sum{S}$ для кожної пари послідовних простих чисел за умови $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` має повернути `18613426663617120`.

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
