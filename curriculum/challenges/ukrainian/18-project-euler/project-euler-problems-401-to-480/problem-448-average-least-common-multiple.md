---
id: 5900f52c1000cf542c51003f
title: 'Завдання 448: середнє найменше спільне кратне'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

Функція $нск(a, b)$ позначає найменше спільне кратне чисел $a$ та $b$.

Нехай $A(n)$ буде середнім числом значень $lcm(n, i)$ за умови $1 ≤ i ≤ n$.

Наприклад, $A(2) = \frac{2 + 2}{2} = 2$ та $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Нехай $S(n) = \sum A(k)$ за умови $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

Знайдіть $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

# --hints--

`averageLCM()` має повернути `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```
