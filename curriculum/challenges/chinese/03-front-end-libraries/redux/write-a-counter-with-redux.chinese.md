---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 用Redux写一个计数器
---

## Description
<section id="description">现在您已经了解了Redux的所有核心原则！您已经了解了如何创建操作和操作创建器，创建Redux存储，针对存储分派操作以及使用纯reducer设计状态更新。您甚至已经了解了如何使用reducer组合管理复杂状态并处理异步操作。这些示例过于简单，但这些概念是Redux的核心原则。如果您理解它们，那么您已准备好开始构建自己的Redux应用程序。接下来的挑战涵盖了有关<code>state</code>不变性的一些细节，但首先，这里是对迄今为止所学到的所有内容的回顾。 </section>

## Instructions
<section id="instructions">在本课程中，您将从头开始使用Redux实现一个简单的计数器。代码编辑器中提供了基础知识，但您必须填写详细信息！使用提供的名称并定义<code>incAction</code>和<code>decAction</code>操作创建者， <code>decAction</code> <code>counterReducer()</code> ， <code>INCREMENT</code>和<code>DECREMENT</code>操作类型，最后定义Redux <code>store</code> 。一旦完成，您应该能够发送<code>INCREMENT</code>或<code>DECREMENT</code>操作来增加或减少<code>store</code>保存的状态。祝你好运第一个Redux应用程序！ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 动作创建者<code>incAction</code>应返回<code>type</code>等于<code>INCREMENT</code>值的动作对象
    testString: assert(incAction().type ===INCREMENT);
  - text: 动作创建者<code>decAction</code>应与返回动作对象<code>type</code>等于的值<code>DECREMENT</code>
    testString: assert(decAction().type === DECREMENT);
  - text: Redux存储应该以0 <code>state</code>初始化。
    testString: assert(store.getState() === 0);
  - text: 在Redux存储上调度<code>incAction</code>应该将<code>state</code>增加1。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })());
  - text: 在Redux存储上调度<code>decAction</code>应该将<code>state</code>减1。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })());
  - text: <code>counterReducer</code>应该是一个函数
    testString: assert(typeof counterReducer === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // define a constant for increment action types
const DECREMENT = null; // define a constant for decrement action types

const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // define an action creator for incrementing

const decAction = null; // define an action creator for decrementing

const store = null; // define the Redux store here, passing in your reducers

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
