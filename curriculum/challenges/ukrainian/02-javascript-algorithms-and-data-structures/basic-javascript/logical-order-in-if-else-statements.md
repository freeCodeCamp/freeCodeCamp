---
id: 5690307fddb111c6084545d7
title: Логічна послідовність в команді If Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

Послідовність є важливою в командах `if` та `else if`.

Функція виконується зверху до низу, тому уважно перевірте, яке речення стоїть першим.

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

А друга лише міняє порядок команд:

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

Оскільки ці дві функції виглядають майже однаково, навіть якщо ми надаємо однакове число обом, то отримуємо різні результати.

```js
foo(0)
bar(0)
```

`foo(0)` видаватиме рядок `Less than one`, і `bar(0)` видаватиме рядок `Less than two`.

# --instructions--

Змініть логічну послідовність функції так, щоб вона видавала правильні команди у всіх випадках.

# --hints--

`orderMyLogic(4)` повинен повертати рядок `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` повинен повертати рядок `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` повинен повертати рядок `Greater than or equal to 10`

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
