---
id: 5a23c84252665b21eecc7edf
title: Найменше спільне кратне
challengeType: 5
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

Найменше спільне кратне 12 та 18 це 36, оскільки 12 - коефіцієнт (12 × 3 = 36), та 18 - коефіцієнт (18 × 2 = 36), і немає цілого додатного числа менше ніж 36, яке мало б обидва коефіцієнти. В окремому випадку, якщо *m* або *n* дорівнює нулю, то найменше спільне кратне дорівнює нулю. Одним зі способів обчислення найменшого спільного кратного є повторення всіх кратних *m*, доки не буде знайдено таке, що є кратним *n*. Якщо у вас вже є *gcd* для [greatest common divisor](https://rosettacode.org/wiki/greatest common divisor), в такому випадку ця формула вираховує *lcm*. ( \\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)} )

# --instructions--

Обчисліть найменше спільне кратне масиву цілих чисел. З огляду на значення *m* та *n*, найменше спільне кратне - це найменше позитивне ціле число, яке має як *m*, так і *n* у якості факторів.

# --hints--

`LCM` має бути функцією.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` має повернути число.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` має повертати `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` має повертати `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` має повертати `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` має повертати `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` має повертати `67050`.

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
