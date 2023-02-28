---
id: 5a24c314108439a4d4036143
title: Вилучення State Logic в Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

Тепер, коли ви закінчили компонент React, вам потрібно перемістити логіку, яку він виконує локально в його `state` в Redux. Це перший крок, який дозволяє підключити простий додаток React до Redux. Єдину функцію, яку має ваш додаток - це додавання нових повідомлень від користувача до неупорядкованого списку. Приклад простий, для того щоб показати, як React та Redux працюють разом.

# --instructions--

Спершу, визначте значення змінної `ADD` і встановіть її у const `ADD`. Далі, встановіть виконавця дій `addMessage()`, який створює дію для додавання повідомлення. Вам потрібно передати `message` цьому виконавцю дій і додати повідомлення у повернене `action`.

Потім створіть скорочення, яке називається `messageReducer()`, яке обробляє стан для повідомлень. Початковий стан повинен дорівнювати пустому масиву. Це скорочення повинно додавати повідомлення до масиву, який зберігається у стані чи повертати поточний стан. Нарешті, створіть ваше сховище Redux та передайте його до reducer.

# --hints--

Конст `ADD` має існувати і утримувати значення рівне рядку `ADD`

```js
assert(ADD === 'ADD');
```

Виконавець дій `addMessage` має видати об'єкт з `type` рівний до `ADD` і `message` рівний до повідомлення в якому воно передається.

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

Сховище повинно існувати і мати початковий стан, встановлений на пустому масиві.

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

Відправлення `addMessage` до сховища повинно незмінно додавати нове повідомлення до масиву повідомлень, які знаходиться у стані.

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

`messageReducer` має повернутися до поточного стану, якщо викликається з будь-яким іншими діями.

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
