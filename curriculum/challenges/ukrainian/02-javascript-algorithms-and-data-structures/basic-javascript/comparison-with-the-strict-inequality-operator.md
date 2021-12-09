---
id: 56533eb9ac21ba0edf2244d3
title: Порівняння з Оператором Абсолютної Нерівності
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

Оператор абсолютної нерівності (`!==`) є логічною протилежністю оператора абсолютної рівності. Це означає, що "Абсолютно Не Рівно" та визначається `false`, де абсолютна рівність визначається як `true` і *vice versa*. Оператор абсолютної нерівності не буде перетворювати типи даних.

**Приклади**

```js
3 !==  3
3 !== '3'
4 !==  3
```

У такому порядку, ці вирази будуть оцінювати, як `false`, `true`,`true`.

# --instructions--

Додайте оператора абсолютної нерівності до команди `if`, щоб функція визначила рядок `Not Equal`, коли `val` не є абсолютно рівним `17`

# --hints--

`testStrictNotEqual(17)` перетворюється в рядку на `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` перетворюється в рядку на `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` перетворюється в рядку на `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` перетворюється в рядку на `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

Вам слід використовувати оператора`!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
