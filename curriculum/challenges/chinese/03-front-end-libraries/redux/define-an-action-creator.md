---
id: 5a24c314108439a4d403614e
challengeType: 6
forumTopicId: 301441
title: 定义一个 Action Creator
---

## Description
<section id='description'>
创建 action 后要将 action 发送到 Redux store，以便它可以更新其状态。在 Redux 中，你可以定义动作创建器来完成此任务，action creator 只是一个返回动作的 JavaScript 函数，换句话说，action creator 创建表示动作事件的对象。
</section>

## Instructions
<section id='instructions'>
定义名为<code>actionCreator()</code>的函数，该函数在调用时返回<code>action</code>对象。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 函数<code>actionCreator</code>应该存在。
    testString: assert(typeof actionCreator === 'function');
  - text: 运行<code>actionCreator</code>函数应返回 action 对象。
    testString: assert(typeof action === 'object');
  - text: 返回的 action 应具有值为<code>LOGIN</code>的键值类型。
    testString: assert(action.type === 'LOGIN');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const action = {
  type: 'LOGIN'
}
// 在此处定义 action creator


```

</div>



</section>

## Solution
<section id='solution'>


```js
const action = {
  type: 'LOGIN'
}
// 在此处定义 action creator:
const actionCreator = () => {
  return action;
};
```

</section>
