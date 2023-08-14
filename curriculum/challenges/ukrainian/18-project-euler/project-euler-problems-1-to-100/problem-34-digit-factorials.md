---
id: 5900f38e1000cf542c50fea1
title: 'Завдання 34: факторіали чисел'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 є автоморфним числом, оскільки 1! + 4! + 5! = 1 + 24 + 120 = 145.

Знайдіть числа та суму чисел, які дорівнюють сумі факторіалу їхніх цифр.

**Примітка:** оскільки 1! = 1 та 2! = 2 не є сумою, їх не враховуємо.

# --hints--

`digitFactorial()` має повернути об’єкт.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` має повернути { sum: 40730, numbers: [145, 40585] }.

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
