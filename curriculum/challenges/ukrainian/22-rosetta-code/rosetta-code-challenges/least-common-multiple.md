---
id: 5a23c84252665b21eecc7edf
title: Найменше спільне кратне
challengeType: 1
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

Найменшим спільним кратним чисел 12 та 18 є 36, оскільки 12 є множником (12 × 3 = 36) та 18 є множником (18 × 2 = 36), і не існує натурального числа, меншого за 36, яке ділиться на обидва числа. В окремому випадку, якщо $m$ або $n$ дорівнює нулю, то найменше спільне кратне дорівнює нулю. Один зі способів обчислити найменше спільне кратне — ітерувати всі кратні числа $m$, доки не буде знайдено таке, що є кратним числа $n$. Якщо ви вже маєте $нсд$ для <a href="https://rosettacode.org/wiki/Greatest_common_divisor" target="_blank" rel="noopener noreferrer nofollow">найбільшого спільного дільника</a>, ось формула для обчислення $нск$.

$$ \\operatorname{нск}(m, n) = \\frac{|m \\times n|}{\\operatorname{нсд}(m, n)} $$

# --instructions--

Обчисліть найменше спільне кратне масиву цілих чисел. Дано *m* та *n*; найменшим спільним кратним є найменше натуральне число, яке ділиться на *m* та *n*.

# --hints--

`LCM` має бути функцією.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` має повернути число.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` має повернути `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` має повернути `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` має повернути `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` має повернути `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` має повернути `67050`.

```js
assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

# --seed--

## --seed-contents--

```js
function LCM(A) {

}
```

# --solutions--

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```
