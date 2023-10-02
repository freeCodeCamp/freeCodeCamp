---
id: 5cdafbb0291309899753167f
title: Створення промісу в JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Проміс у JavaScript (з англ. «обіцянка») має пряме значення: цей термін використовується для того, щоб «пообіцяти» щось зробити, зазвичай асинхронно. Коли завдання завершується, ви або виконуєте проміс, або відхиляєте його. `Promise` є конструктурною функцією, тому потрібно використати ключове слово `new`, щоб створити новий проміс. Він приймає функцію як свій аргумент з двома параметрами: `resolve` та `reject`. Ці методи використовують, щоб визначити результат промісу. Синтаксис виглядає наступним чином:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Створіть новий проміс під назвою `makeServerRequest`. Передайте функцію з параметрами `resolve` та `reject` до конструктора.

# --hints--

Ви повинні присвоїти проміс до оголошеної змінної під назвою `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Ваш проміс повинен отримати функцію з параметрами `resolve` та `reject`.

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
