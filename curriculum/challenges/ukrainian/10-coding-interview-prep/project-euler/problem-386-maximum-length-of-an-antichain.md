---
id: 5900f4ef1000cf542c510001
title: 'Задача 386: Максимальна довжина антиланцюга'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

Нехай $n$ — ціле число, а $S(n)$ — набір множників $n$.

Підмножина $A$ та $S(n)$ називається антиланцюгом $S(n)$, якщо $A$ має лише один елемент або якщо жоден з елементів $A$ не ділить будь-який інший з елементів $A$.

Наприклад, $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ не є антиланцюгом $S(30)$.

$\\{2, 3, 5\\}$ не є антиланцюгом $S(30)$.

Нехай $N(n)$ — максимальна довжина антиланцюга $S(n)$.

Знайдіть $\sum N(n)$ for $1 ≤ n ≤ {10}^8$

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
