---
id: 56533eb9ac21ba0edf2244d0
title: Порівняння з Оператором Рівності
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

У JavaScript є багато <dfn>операторів порівняння</dfn>. Всі ці оператори присвоюють логічне `true` або `false` значення.

Основним є оператор рівності `==`. Оператор рівності порівнює два значення і видає `true`, якщо вони еквівалентні, або `false`, якщо ні. Зверніть увагу, що рівність відрізняється від присвоєння (`=`), яке закріплює за змінною ліворуч значення праворуч від оператора.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

Якщо `myVal` рівнозначний `10`, оператор рівності видає `true`, тож код у фігурних дужках виконається, і функція буде `Equal`. В іншому випадку, функція буде `Not Equal`. Для того, щоб JavaScript порівняв два різні <dfn>типи даних</dfn> (наприклад, `numbers` і `strings`), потрібно конвертувати один тип в інший. Це називається Перетворення Типів. Однак, після його виконання поняття порівнюються наступним чином:

```js
1   ==  1
1   ==  2
1   == '1'
"3" ==  3
```

У такому ж порядку, як вони є, ці вирази будуть оцінені, як `true`, `false`, `true`, і `true`.

# --instructions--

Додайте оператор рівності до зазначеного рядка, щоб функція визначила рядок, як `Equal`, коли `val` еквівалентна `12`.

# --hints--

`testEqual(10)` повинен повернути рядок `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` повинен повернути рядок `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` повинен повернути рядок `Equal`

```js
assert(testEqual('12') === 'Equal');
```

Слід використовувати оператор `==`

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
