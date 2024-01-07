---
id: 5a24c314108439a4d403615a
title: 配列からアイテムを削除する
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

配列からアイテムを削除する練習をしましょう。 ここでもスプレッド演算子を使用できます。 他にも `slice()` や `concat()` といった便利な JavaScript メソッドがあります。

# --instructions--

アイテムのインデックスに基づいて配列からアイテムを削除するように、リデューサーとアクションクリエイターを変更しました。 レデューサーの記述を完成させて、指定されたインデックスのアイテムが削除された、新しい state 配列を返すようにしてください。

# --hints--

Redux ストアが存在し、state を `[0,1,2,3,4,5]` にして初期化する必要があります。

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

`removeItem` と `immutableReducer` はどちらも関数である必要があります。

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

`removeItem` アクションクリエイターのディスパッチで、state からアイテムを削除します。state をミューテートしてはいけません。

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
