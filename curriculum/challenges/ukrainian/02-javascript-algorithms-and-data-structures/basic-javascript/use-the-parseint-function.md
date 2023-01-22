---
id: 587d7b7e367417b2b2512b23
title: Використовуйте Функцію parseInt
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

Наведена вище функція перетворює рядок `007` у ціле `7`. Якщо перший символ у рядку не може бути перетвореним у число, тоді він повертає `NaN`.

# --instructions--

Використовуйте `parseInt()` у функції `convertToInteger`, щоб вона конвертувала вхідний рядок `str` у ціле число та повернула його.

# --hints--

`convertToInteger` має використати функцію `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` має повернути число

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` має повернути 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` має повернути 77

```js
assert(convertToInteger('77') === 77);
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

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
