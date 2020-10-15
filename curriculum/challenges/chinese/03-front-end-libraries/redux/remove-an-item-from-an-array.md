---
id: 5a24c314108439a4d403615a
challengeType: 6
forumTopicId: 301447
title: 从数组中删除项目
---

## Description
<section id='description'>
是时候练习从数组中删除项目了。扩展运算符也可以在这里使用。其他有用的JavaScript方法包括<code>slice()</code>和<code>concat()</code>。
</section>

## Instructions
<section id='instructions'>
reducer 和 action creator 被修改为根据项目的索引从数组中删除一个项目。完成编写 reducer 以便返回一个新的状态数组，并删除特定索引处的项目。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Redux store 应该存在并初始化一个<code>[0,1,2,3,4,5]</code>的状态。
    testString: assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })());
  - text: <code>removeItem</code>和<code>immutableReducer</code>都应该是一个函数。
    testString: assert(typeof removeItem === 'function' && typeof immutableReducer === 'function');
  - text: dispatch <code>removeItem</code> action creator 应该从 state 中删除项目，不应该改变 state。
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(removeItem(3)); const state_1 = store.getState(); store.dispatch(removeItem(2)); const state_2 = store.getState(); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); const state_3 = store.getState(); return isFrozen && DeepEqual(state_1, [0, 1, 2, 4, 5]) && DeepEqual(state_2, [0, 1, 4, 5]) && DeepEqual(state_3, [5]); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // 不要在这里改变 state 否则测试会失败。
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

</div>



</section>

## Solution
<section id='solution'>


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

</section>
