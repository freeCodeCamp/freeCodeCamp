---
id: 5900f3f21000cf542c50ff05
title: 'Завдання 134: З’єднання простих чисел'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Розглянемо наступні прості числа $p_1 = 19$ та $p_2 = 23$. Можна перевірити, що 1219 є найменшим числом, у якому останні цифри формуються $p_1$, а також ділиться на $p_2$.

Насправді, за винятком $p_1 = 3$ та $p_2 = 5$, для кожної пари наступних простих чисел $p_2 > p_1$, існують значення $n$, у яких останні цифри формуються $p_1$, а $n$ ділиться на $p_2$. Нехай $S$ — найменше із цих значень $n$.

Знайдіть $\sum{S}$ для кожної пари наступних простих чисел, якщо $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` повинно повертати число `18613426663617120`.

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
