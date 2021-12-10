---
id: 56533eb9ac21ba0edf2244d8
title: Порівняння з оператором "більше ніж"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

Трапляється, що потрібно перевіряти більше ніж одну цифру одночасно. <dfn>Оператор "більше ніж"</dfn> `&&` стає `true` якщо <dfn>вихідні об'єкти</dfn> справа та зліва від нього вірні.

Такого ж результату можна досягнути шляхом закладання інформації всередині іншого:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

результат `Yes`, якщо `num` є більшим `5` та меньшим за `10`. Приклад оператора наведено нище:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Замініть два оператора if statements одним використовуючи `&&` оператор. Значення рядка буде `Yes`, якщо `val` меньше або рівне `50` та більше або рівне `25`. В іншому випадку значення рядка стане `No`.

# --hints--

Використовуйте оператор `&&` лише один раз

```js
assert(code.match(/&&/g).length === 1);
```

У вас має бути лише один елемент `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` перетворюється у рядку на `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` перетворюється на `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` перетворюється на `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` перетворюється на `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` перетворюється на `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` перетворюється на `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` перетворюється на `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` перетворюється на `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
