---
id: 587d7b83367417b2b2512b37
title: Розуміння різниці між freeCodeCamp та консоллю браузера
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Ви могли помітити, що у завдань freeCodeCamp є власна консоль. Ця консоль функціонує трохи інакше, ніж консоль браузера.

Існує багато способів, які можна використовувати за допомогою `console` для виведення повідомлень. Наприклад, ось деякі з них: `log`, `warn` та `clear`. Консоль freeCodeCamp виведе лише `log` повідомлення, у той час як консоль браузера виведе всі повідомлення. У разі внесення змін до коду він автоматично запуститься та покаже системні журнали. Отже, консоль freeCodeCamp очищується щоразу, як запускається ваш код.

# --instructions--

Спочатку відкрийте консоль вашого браузера так, щоб бачити системні журнали. Для цього натисніть правою кнопкою миші зверху на панелі навігаційної стрічки freeCodeCamp та виберіть `inspect` на панелі інструментів більшості браузерів. Потім знайдіть вкладку `console` у вікні, що відкриється.

Після цього використайте `console.log`, щоб зазначити змінну `output`. Перегляньте дві консолі, щоб побачити системний журнал. Наприкінці використайте функцію `console.clear` після вашого системного журналу, щоб очистити консоль браузера. Побачте різницю у двох консолях.

# --hints--

Ви повинні використати `console.log()`, щоб вивести на екран змінну `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Ви повинні використати `console.clear()`, щоб очистити консоль браузера.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Ви повинні очистити консоль після свого системного журналу.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
