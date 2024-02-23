---
id: 5690307fddb111c6084545d7
title: Логічна послідовність в інструкції if else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

В інструкціях `if` та `else if` важлива послідовність.

Функція виконується зверху донизу, тому уважно перевіряйте, яка інструкція написана першою.

Візьмемо ці дві функції як приклад.

Перша:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

А друга лише змінює порядок інструкцій:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

Ці функції виглядають майже однаково, але ми отримаємо різні результати, навіть якщо надамо те саме число обом.

```js
foo(0)
bar(0)
```

`foo(0)` повертатиме рядок `Less than one`, а `bar(0)` повертатиме рядок `Less than two`.

# --instructions--

Змініть логічну послідовність функції так, щоб вона повертала правильні твердження у всіх випадках.

# --hints--

`orderMyLogic(4)` має повертати рядок `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` має повертати рядок `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` має повертати рядок `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
