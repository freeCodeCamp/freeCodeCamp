---
id: 587d7b7e367417b2b2512b22
title: Використайте функцію ParseInt з радіусом
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

Функція `parseInt()` аналізує рядок і повертає ціле число. Для радікса потрібен другий аргумент, який визначає основу числа у рядку. Радіксом може бути ціле число від 2 до 36.

Виклик функції виглядає так:

```js
parseInt(string, radix);
```

Ось приклад:

```js
const a = parseInt("11", 2);
```

Змінна радікса говорить, що `11` знаходиться у двійковій системі або у базі 2. Цей приклад перетворює рядок `11` на ціле число `3`.

# --instructions--

Використовуйте `parseInt()` у функції `convertToInteger`, щоб воно перетворило двійкове число на ціле число і повернуло його.

# --hints--

`convertToInteger` має використати функцію `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` має повернути число

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` має повернути 19

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` має повернути 57

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")` має повернути `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
