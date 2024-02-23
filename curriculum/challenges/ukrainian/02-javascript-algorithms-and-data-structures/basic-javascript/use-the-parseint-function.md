---
id: 587d7b7e367417b2b2512b23
title: Використання функції parseInt
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

Функція `parseInt()` аналізує рядок і повертає ціле число. Наприклад:

```js
const a = parseInt("007");
```

Наведена вище функція перетворює рядок `007` на ціле число `7`. Якщо перший символ у рядку не можна перетворити на число, повертається `NaN`.

# --instructions--

Використайте `parseInt()` у функції `convertToInteger`, щоб вхідний рядок `str` перетворився на ціле число та повернувся.

# --hints--

`convertToInteger` має використовувати функцію `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` має повертати число

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` має повертати 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` має повертати 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` має повертати `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
