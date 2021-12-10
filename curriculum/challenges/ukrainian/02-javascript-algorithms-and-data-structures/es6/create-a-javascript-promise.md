---
id: 5cdafbb0291309899753167f
title: Створіть Promise у JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

У JavaScript Promise (з англ. «обіцянка») має пряме значення: цей термін використовується для того, щоб «пообіцяти» щось зробити, зазвичай асинхронно. Коли завдання звершується, ви або виконуєте Promise, або відхиляєте його. `Promise` - це функція конструктора, тож необхідно використати ключове слово `new`, щоб створити новий Promise. Для цього потрібні функція, як його аргумент, з двома параметрами: `resolve` та `reject`. Такі методи використовуються для визначення результату Promise. Синтаксис виглядає наступним чином:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Створіть новий Promise під назвою `makeServerRequest`. У функції перейдіть до параметрів конструктора `resolve` та `reject`.

# --hints--

Призначте Promise до оголошеної змінної під назвою `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Ваш Promise має отримати функцію з параметрами `resolve` та `reject`.

```js
assert(
  code.match(
    /Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
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
