---
id: 587d7b83367417b2b2512b37
title: Різниця між консолями freeCodeCamp та браузера
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Ви могли помітити, що у деяких завдань freeCodeCamp є власна консоль. Ця консоль функціонує трохи інакше, ніж консоль браузера.

Існує багато методів, які можна використовувати з `console`, щоб надрукувати повідомлення. Наприклад, ось деякі з них: `log`, `warn` та `clear`. Консоль freeCodeCamp виведе лише повідомлення `log`, а консоль браузера виведе всі повідомлення. У разі внесення змін до коду вона автоматично запуститься та покаже логи. А консоль freeCodeCamp очищується щоразу, як запускається ваш код.

# --instructions--

Спочатку відкрийте консоль вашого браузера так, щоб бачити логи. Для цього натисніть правою кнопкою миші зверху на панелі навігаційної стрічки freeCodeCamp та виберіть `inspect` на панелі інструментів більшості браузерів. Потім знайдіть вкладку `console` у вікні, що відкриється.

Після цього використайте `console.log`, щоб зазначити змінну `output`. Перегляньте дві консолі, щоб побачити лог. Наприкінці використайте функцію `console.clear` після свого логу, щоб очистити консоль браузера. Погляньте на різницю у двох консолях.

# --hints--

Ви повинні використати `console.log()`, щоб надрукувати змінну `output`.

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

Ви повинні очистити консоль після логу.

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
