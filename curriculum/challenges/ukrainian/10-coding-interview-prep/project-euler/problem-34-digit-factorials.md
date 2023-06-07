---
id: 5900f38e1000cf542c50fea1
title: 'Завдання 34: Факторіали чисел'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 — це автоморфне число, оскільки 1! + 4! + 5! = 1 + 24 + 120 = 145.

Знайдіть числа та суму чисел, які дорівнюють сумі факторіалу їхніх цифр.

**Примітка:** як 1! = 1 і 2! = 2 не є сумами, то вони сюди не входять.

# --hints--

`digitFactorial()` повинен повернути об'єкт.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` має повернути {sum: 40730, numbers: [145, 40585] }.

```js
assert.deepEqual(digitFactorial(), { sum: 40730, numbers: [145, 40585] });
```

# --seed--

## --seed-contents--

```js
function digitFactorial() {

  var sum = 0;
  var numbers = [];
  return { sum, numbers };
}

digitFactorial();
```

# --solutions--

```js
// solution required
```
