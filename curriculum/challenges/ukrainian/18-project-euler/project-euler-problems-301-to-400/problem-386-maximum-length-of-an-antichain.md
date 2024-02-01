---
id: 5900f4ef1000cf542c510001
title: 'Завдання 386: максимальна довжина антиланцюга'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

Нехай $n$ буде цілим числом, а $S(n)$ буде множиною дільників числа $n$.

Підмножина $A$ множини $S(n)$ називається антиланцюгом, якщо $A$ містить лише один елемент або жоден з елементів не ділиться на будь-який інший елемент.

Наприклад, $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ не є антиланцюгом множини $S(30)$.

$\\{2, 3, 5\\}$ є антиланцюгом множини $S(30)$.

Нехай $N(n)$ буде максимальною довжиною антиланцюга множини $S(n)$.

Знайдіть $\sum N(n)$ за умови $1 ≤ n ≤ {10}^8$

# --hints--

`maximumLengthOfAntichain()` має повернути `528755790`.

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
