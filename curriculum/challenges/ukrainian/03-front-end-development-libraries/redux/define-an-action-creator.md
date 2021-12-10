---
id: 5a24c314108439a4d403614e
title: Визначення виконавця дії
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

Після створення дії, наступний крок це відправлення дії до Redux сховища, так щоб він зміг оновити свій стан. В Redux, ви визначаєте виконавців дій. Виконавець дії - це просто функція JavaScript, яка повертає дію. Іншими словами, виконавці дій створюють об'єкти які відображають події дій.

# --instructions--

Визначте функцію з назвою `actionCreator()`, яка повертає об'єкт `action` під час її виклику.

# --hints--

Функція `actionCreator` повинна існувати.

```js
assert(typeof actionCreator === 'function');
```

Запуск функції `actionCreator` повинен повернути об'єкт `action`.

```js
assert(typeof action === 'object');
```

Повернений об'єкт `action` повинен мати властивість ключа `type` зі значенням `LOGIN`.

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
