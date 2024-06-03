---
id: 5a24c314108439a4d4036143
title: Перемістіть логіку стану до Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

Ви закінчили компонент React, а отже потрібно перемістити логіку, яку він виконує в стані локально, до Redux. Це перший крок, який дозволяє приєднати простий застосунок React до Redux. Єдина функція, яку має ваш застосунок — це додавання нових повідомлень від користувача до невпорядкованого списку. Приклад простий, щоб показати, як React та Redux працюють разом.

# --instructions--

Спочатку визначте тип дії `ADD` та встановіть його на константу `ADD`. Потім визначте автора дій `addMessage()`, який створює дію для додавання повідомлення. Вам потрібно передати `message` до автора дій і помістити повідомлення в повернену дію (`action`).

Потім створіть редюсер під назвою `messageReducer()`, який обробляє стан повідомлень. Початковий стан має дорівнювати порожньому масиву. Цей редюсер має додавати повідомлення до масиву повідомлень, збережених у стані, або повертати поточний стан. Вкінці створіть сховище Redux та передайте йому редюсер.

# --hints--

Константа `ADD` має існувати та зберігати значення рядка `ADD`

```js
assert(ADD === 'ADD');
```

Автор дій `addMessage` має повернути об’єкт з `type` зі значенням `ADD` та `message` зі значенням переданого повідомлення.

```js
assert(
  (function () {
    const addAction = addMessage('__TEST__MESSAGE__');
    return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__';
  })()
);
```

`messageReducer` має бути функцією.

```js
assert(typeof messageReducer === 'function');
```

Сховище має існувати та мати початковий стан зі значенням порожнього масиву.

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

Відправлення `addMessage` до сховища має незмінно додати нове повідомлення до масиву повідомлень, збережених у стані.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addMessage('__A__TEST__MESSAGE'));
    const addState = store.getState();
    return isFrozen && addState[0] === '__A__TEST__MESSAGE';
  })()
);
```

`messageReducer` має повернути поточний стан, якщо його викликати з будь-якою іншою дією.

```js
assert(
  (function () {
    const addState = store.getState();
    store.dispatch({ type: 'FAKE_ACTION' });
    const testState = store.getState();
    return addState === testState;
  })()
);
```

# --seed--

## --seed-contents--

```jsx
// Define ADD, addMessage(), messageReducer(), and store here:
```

# --solutions--

```jsx
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```
