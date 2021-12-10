---
id: 5a24c314108439a4d403615a
title: Вилучення елементу з масиву
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

Час потренуватися вилучати елементи з масиву. Поширені оператори також можуть тут використовуватись. Інші корисні методи JavaScript включають `slice()` та `concat()`.

# --instructions--

Зменшувач та виконавець дії були змінені на те, щоб вилучати елемент з масиву, ґрунтуючись на індексі елемента. Завершіть написання зменшувача, щоб новий стан масиву повернувся з елементом за конкретним видаленим індексом.

# --hints--

Сховище Redux має існувати та ініціалізуватися зі станом, що дорівнює `[0,1,2,3,4,5]`

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      DeepEqual(initialState, [0, 1, 2, 3, 4, 5])
    );
  })()
);
```

Обидва `removeItem` та `immutableReducer` мають бути функціями.

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

Виконання дії `removeItem` має видаляти елементи зі стану та НЕ змінювати його.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(removeItem(3));
    const state_1 = store.getState();
    store.dispatch(removeItem(2));
    const state_2 = store.getState();
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    const state_3 = store.getState();
    return (
      isFrozen &&
      DeepEqual(state_1, [0, 1, 2, 4, 5]) &&
      DeepEqual(state_2, [0, 1, 4, 5]) &&
      DeepEqual(state_3, [5])
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```
