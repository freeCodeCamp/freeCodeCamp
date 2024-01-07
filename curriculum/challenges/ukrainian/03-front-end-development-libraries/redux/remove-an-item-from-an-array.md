---
id: 5a24c314108439a4d403615a
title: Видаліть елемент з масиву
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

Час потренуватися вилучати елементи з масиву. Оператор розширення можна використати і тут. До інших корисних методів JavaScript відносять `slice()` та `concat()`.

# --instructions--

Редюсер та автор дії були змінені, щоб вилучати елемент з масиву на основі індексу елемента. Допишіть редюсер, щоб масив нового стану повернувся з елементом на основі видаленого індексу.

# --hints--

Сховище Redux має існувати й ініціалізуватися станом, який дорівнює `[0,1,2,3,4,5]`

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

`removeItem` та `immutableReducer` мають бути функціями.

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

Відправлення автора дії `removeItem` має видалити елементи зі стану та НЕ змінювати стан.

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
