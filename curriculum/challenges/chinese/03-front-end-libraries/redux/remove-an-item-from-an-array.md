---
id: 5a24c314108439a4d403615a
title: 从数组中删除项目
challengeType: 6
forumTopicId: 301447
---

# --description--

是时候练习从数组中删除项目了。扩展运算符也可以在这里使用。其他有用的JavaScript方法包括`slice()`和`concat()`。

# --instructions--

reducer 和 action creator 被修改为根据项目的索引从数组中删除一个项目。完成编写 reducer 以便返回一个新的状态数组，并删除特定索引处的项目。

# --hints--

Redux store 应该存在并初始化一个`[0,1,2,3,4,5]`的状态。

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

`removeItem`和`immutableReducer`都应该是一个函数。

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

dispatch `removeItem` action creator 应该从 state 中删除项目，不应该改变 state。

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

# --solutions--

