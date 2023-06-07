---
id: 5900f52c1000cf542c51003f
title: 'Завдання 448: Найменше спільне кратне'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

Функція $lcm(a, b)$ позначає найменше спільне кратне $a$ і $b$.

Нехай $A(n)$ буде середнім зі значень $lcm(n, i)$ для $1 ≤ i ≤ n$.

Наприклад: $A(2) = \frac{2 + 2}{2} = 2$ та $A(10) = \frac{10 + 10 + 20 + 20 + 30 + 40 + 90 + 10}{10} = 32$.

Нехай $S(n) = \sum A(k)$ за $1 ≤ k n$.

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
