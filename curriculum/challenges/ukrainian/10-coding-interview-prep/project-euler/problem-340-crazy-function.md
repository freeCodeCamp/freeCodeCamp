---
id: 5900f4c21000cf542c50ffd4
title: 'Задача 340: Божевільна функція'
challengeType: 1
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

Для фіксованих цілих $a$, $b$, $c$ визначити цю функцію $F(n)$ наступним чином:

$$\begin{align}   & F(n) = n - c \\;\text{ for all } n > b \\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ for all } n ≤ b. \end{align}$$

Також визначте $S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$.

Наприклад, якщо $a = 50$, $b = 2000$ та $c = 40$, тоді $F(0) = 3240$ and $F(2000) = 2040$. Також $S(50, 2000, 40) = 5\\,204\\,240$.

Знайдіть останні 9 цифр в $S({21}^7, 7^{21}, {12}^7)$.

# --hints--

`crazyFunction()` має повернути `291504964`.

```js
assert.strictEqual(crazyFunction(), 291504964);
```

# --seed--

## --seed-contents--

```js
function crazyFunction() {

  return true;
}

crazyFunction();
```

# --solutions--

```js
// solution required
```
