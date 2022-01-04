---
id: 5a24c314108439a4d403614c
title: Отримання стану з сховища Redux
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

Об'єкт сховища Redux надає кілька методів які дозволяють вам взаємодіяти з ним. Наприклад, ви можете отримати поточне значення `state` в об'єкті сховища Redux за допомогою методу `getState()`.

# --instructions--

Код з попереднього завдання переписаний більш лаконічно у редакторі коду. Використайте `store.getState()` щоб отримати `state` з `store`, і призначте до нової змінної `currentState`.

# --hints--

Сховище Redux повинно мати значення 5 для початкового стану.

```js
assert(store.getState() === 5);
```

Змінна `currentState` повинна існувати і повинна встановлювати поточний стан сховища Redux.

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
