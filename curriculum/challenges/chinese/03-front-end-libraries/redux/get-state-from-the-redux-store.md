---
id: 5a24c314108439a4d403614c
challengeType: 6
forumTopicId: 301443
title: 从 Redux Store 获取状态
---

## Description
<section id='description'>
Redux store 对象提供了几种允许你与之交互的方法，你可以使用<code>getState()</code>方法检索 Redux store 对象中保存的当前的<code>state</code>。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中可以将上一个挑战中的代码更简洁地重写，在<code>store</code>中使用<code>store.getState()</code>检索<code>state</code>，并将其分配给新变量<code>currentState</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: redux store 的 state 应该有一个初始值 5。
    testString: assert(store.getState()===5);
  - text: 应该存在一个变量<code>currentState</code>，并为其分配 Redux store 的当前状态。
    testString: getUserInput => assert(currentState === 5 && getUserInput('index').includes('store.getState()'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// 更改此行下方的代码

```

</div>



</section>

## Solution
<section id='solution'>


```js
const store = Redux.createStore(
  (state = 5) => state
);

// 更改此行下方的代码
const currentState = store.getState();
```

</section>
