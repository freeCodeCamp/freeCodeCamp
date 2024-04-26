---
id: cf1111c1c12feddfaeb1bdef
title: Генерація випадкових цілих чисел з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Ви можете генерувати випадкові десяткові числа за допомогою `Math.random()`, але іноді потрібно генерувати випадкові цілі числа. Ви отримаєте випадкове ціле число менше за `20`, виконавши ці кроки:

1. Використайте `Math.random()`, щоб згенерувати випадкове десяткове число.
2. Помножте це випадкове десяткове число на `20`.
3. Використайте `Math.floor()`, щоб заокруглити це число до найближчого цілого числа.

Пам’ятайте, що `Math.random()` ніколи не може повернути `1`, тому фактично неможливо отримати `20`, оскільки ви заокруглюєте в меншу сторону за допомогою `Math.floor()`. У результаті ви отримаєте випадкове ціле число від `0` до `19`.

Зіставивши усе разом, ось так виглядає ваш код:

```js
Math.floor(Math.random() * 20);
```

Ви викликаєте `Math.random()`, перемноживши результат на 20, а потім передаєте значення до `Math.floor()`, щоб округлити значення до найближчого цілого числа.

# --instructions--

Використайте цю техніку, щоб згенерувати та повернути випадкове ціле число в діапазоні від `0` до `9`.

# --hints--

Результатом `randomWholeNum` повинне бути ціле число.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Ви повинні використати `Math.random`, щоб згенерувати випадкове число.

```js
assert(__helpers.removeJSComments(code).match(/Math.random/g).length >= 1);
```

Ви повинні помножити результат `Math.random` на 10, щоб зробити його числом в діапазоні від 0 до 9.

```js
assert(
  __helpers.removeJSComments(code).match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    __helpers.removeJSComments(code).match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Ви повинні використати `Math.floor`, щоб видалити десяткову частину числа.

```js
assert(__helpers.removeJSComments(code).match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
