---
id: 5900f3ca1000cf542c50fedc
title: 'Завдання 93: Арифметичні вирази'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

Використовуючи кожну цифру з множини, {1, 2, 3, 4}, тільки один раз, і використовуючи чотири арифметичні операції (+, −, \*, /) і квадратні дужки/круглі дужки, можна сформувати різні цілі додатні числа.

Наприклад,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Зверніть увагу, що злиття цифр, таких як 12 + 34, не допускаються.

Використовуючи множину, {1, 2, 3, 4}, можна отримати тридцять одне різне цільове число, з яких 36 є максимальним, і кожне з чисел від 1 до 28 можна отримати, перш ніж зустріти перше невиражене число.

Знайдіть множину чотирьох різних цифр, `a` &lt; `b` &lt; `c` &lt; `d`, для якої найдовший набір послідовних цілих чисел у порядку від 1 до `n`, який можна отримати, отримуючи вашу відповідь як рядок: `abcd`.

# --hints--

`arithmeticExpressions()` має повернути number.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` має повернути 1258.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
