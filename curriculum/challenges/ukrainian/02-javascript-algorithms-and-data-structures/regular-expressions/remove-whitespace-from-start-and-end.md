---
id: 587d7dbb367417b2b2512bac
title: Видалення пробілу з початку та кінця
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

Іноді пробіли присутні навколо рядка, коли вони там непотрібні. Типовою обробкою рядка є видалення пробілів на їхньому початку та кінці.

# --instructions--

Напишіть регулярний вираз та використайте відповідні методи роботи з рядками, щоб видалити пробіли на початку та в кінці рядків.

**Зверніть увагу:** метод `String.prototype.trim()` не спрацює тут, але вам потрібно виконати це завдання, використовуючи регулярні вирази.

# --hints--

`result` повинен дорівнювати рядку `Hello, World!`

```js
assert(result === 'Hello, World!');
```

Ви не повинні використовувати метод `String.prototype.trim()` для вирішення завдання.

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

Ви не повинні вписувати змінну `result` в рядок

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

Ви не маєте змінювати значення змінної `hello`.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
