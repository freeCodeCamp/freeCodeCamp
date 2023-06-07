---
id: 5900f36e1000cf542c50fe80
title: 'Завдання 1: Числа кратні 3 та 5'
challengeType: 1
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

Якщо ми запишемо усі натуральні числа до 10, кратні числам 3 та 5, то отримаємо 3, 5, 6 та 9. Сума цих кратних — 23.

Знайдіть суму всіх чисел кратних 3 та 5, які менші певного заданого значення: `number`.

# --hints--

`multiplesOf3and5(10)` має повертати число.

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` має повертати 543.

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` має повернути 233168.

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` має повертати 16687353.

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` має повертати 89301183.

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```
