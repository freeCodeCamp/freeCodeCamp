---
id: cf1111c1c12feddfaeb1bdef
title: Генерація випадкових цілих чисел з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Чудово, що ми можемо згенерувати випадкові десяткові числа, але навіть краще, якщо ми використаємо їх для генерації випадкових цілих чисел.

<ol><li>Використайте <code>Math.random()</code>, щоб згенерувати випадкове десяткове число.</li><li>Помножте це випадкове десяткове число на <code>20</code>.</li><li>Використайте іншу функцію, <code>Math.floor()</code>, щоб заокруглити число до найближчого цілого числа.</li></ol>

Пам’ятайте, що `Math.random()` ніколи не повертає `1`, і, оскільки ми округлюємо, неможливо отримати `20`. Цей метод видасть нам ціле число від `0` до `19`.

Зіставивши усе разом, ось так виглядає наш код:

```js
Math.floor(Math.random() * 20);
```

Ми викликаємо `Math.random()`, перемноживши результат на 20, а потім передаємо значення до функції `Math.floor()`, щоб округлити значення до найближчого цілого числа.

# --instructions--

Використайте цю техніку, щоб згенерувати та повернути випадкове ціле число від `0` до `9`.

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
assert(code.match(/Math.random/g).length >= 1);
```

Ви повинні помножити результат `Math.random` на 10, щоб зробити його числом від 0 до 9.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Ви повинні використати `Math.floor`, щоб видалити десяткову частину числа.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
