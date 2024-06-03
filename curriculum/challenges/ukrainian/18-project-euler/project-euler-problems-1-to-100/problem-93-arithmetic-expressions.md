---
id: 5900f3ca1000cf542c50fedc
title: 'Завдання 93: арифметичні вирази'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

Використовуючи кожну цифру з множини {1, 2, 3, 4} тільки один раз, а також чотири арифметичні операції (+, −, \*, /) і квадратні/круглі дужки, можна сформувати різні натуральні числа.

Наприклад,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Зверніть увагу, що не можна об’єднувати такі цифри, як 12 + 34.

Використовуючи множину {1, 2, 3, 4}, можна отримати тридцять одне різне число, з яких найбільшим є 36. До того ж перш ніж отримати перше невиражене число, можна отримати кожне з чисел від 1 до 28.

Знайдіть множину чотирьох різних цифр `a` &lt; `b` &lt; `c` &lt; `d`, за допомогою якої можна отримати найдовшу множину послідовних натуральних чисел від 1 до `n`. Запишіть відповідь у вигляді рядка `abcd`.

# --hints--

`arithmeticExpressions()` має повернути число.

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
