---
id: 5a24c314108439a4d4036157
challengeType: 6
forumTopicId: 301453
title: 用 Redux 写一个计数器
---

## Description
<section id='description'>
现在你已经了解了 Redux 的所有核心原则！你已经了解了如何创建 action 和 action creator，创建 Redux store，通过 store dispatch action，以及使用纯粹的 reducer 设计状态更新。你甚至已经看到过如何使用 reducer 组合管理复杂状态并处理异步操作。这些例子很简单，但这些概念是 Redux 的核心原则。如果你理解它们，你就可以开始构建自己的 Redux 应用了。接下来的挑战包括关于<code>state</code>不变性的一些细节，但是，这里是对你到目前为止学到的所有内容的回顾。
</section>

## Instructions
<section id='instructions'>
在本课程中，你将从头开始使用 Redux 实现一个简单的计数器。基本知识在代码编辑器中提供，但你必须完成详细的内容！使用提供给你的名称并定义<code>incAction</code>和<code>decActio</code> action creator <code>counterReducer()</code>，<code>INCREMENT</code>和<code>DECREMENT</code> action 类型，最后是 Redux <code>store</code>。一旦完成，你应该能够 dispatch <code>INCREMENT</code>或<code>DECREMENT</code>动作来增加或减少<code>store</code>中保存的状态。开始构建你的第一个 Redux 应用程序吧，祝你好运！
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'action creator <code>incAction</code>应返回一个 action 对象 {type:"INCREMENT"}。'
    testString: assert(incAction().type ===INCREMENT);
  - text: 'action creator <code>decAction</code>应返回一个 action 对象 {type:"DECREMENT"}。'
    testString: assert(decAction().type === DECREMENT);
  - text: Redux store 应该将<code>state</code>初始化为 0。
    testString: assert(store.getState() === 0);
  - text: 在 Redux store 上 dispatch <code>incAction</code>应该将<code>state</code>增加 1。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })());
  - text: 在 Redux store 上 dispatch <code>decAction</code>应该将<code>state</code>减少 1。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })());
  - text: <code>counterReducer</code>必须是一个函数。
    testString: assert(typeof counterReducer === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // 为增量 action 类型定义一个常量
const DECREMENT = null; // 为减量 action 类型定义一个常量

const counterReducer = null; // 定义计数器，它将根据收到的action增加或减少状态

const incAction = null; // 定义一个用于递增的 action creator

const decAction = null; // 定义一个用于递减的 action creator

const store = null; // 在这里定义一个 Redux store，传递你的 reducer
```

</div>



</section>

## Solution
<section id='solution'>


```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```

</section>
