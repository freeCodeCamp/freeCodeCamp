---
id: 5a24c314108439a4d403614e
title: Визначте автора дії
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

Як тільки дію створено, її потрібно надіслати до сховища Redux, щоб вона могла оновити стан. Для цього потрібно визначити авторів дії. Автор дії — це функція JavaScript, яка повертає дію. Іншими словами, автори дій створюють об’єкти, які представляють дії.

# --instructions--

Визначте функцію під назвою `actionCreator()`, яка повертає об’єкт `action` після виклику.

# --hints--

Функція `actionCreator` має існувати.

```js
assert(typeof actionCreator === 'function');
```

Запуск функції `actionCreator` має повернути об’єкт `action`.

```js
assert(typeof action === 'object');
```

Повернений об’єкт `action` повинен мати властивість `type` зі значенням `LOGIN`.

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
