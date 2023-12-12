---
id: 5a24c314108439a4d403614c
title: Отримайте стан зі сховища Redux
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

Об’єкт сховища Redux надає декілька методів, які дозволяють взаємодіяти з ним. Наприклад, ви можете отримати поточний стан, збережений в об’єкті сховища Redux, за допомогою метода `getState()`.

# --instructions--

У редакторі коду коротше переписано код з попереднього завдання. Використайте `store.getState()`, щоб отримати `state` зі `store`, та призначте його до нової змінної `currentState`.

# --hints--

Сховище Redux повинне мати значення 5 для початкового стану.

```js
assert(store.getState() === 5);
```

Змінна `currentState` має існувати, а також до неї має бути призначений поточний стан сховища Redux.

```js
(getUserInput) =>
  assert(
    currentState === 5 && getUserInput('index').includes('store.getState()')
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```
