---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 定义一个Action Creator
---

## Description
<section id="description">创建操作后，下一步是将操作发送到Redux存储，以便它可以更新其状态。在Redux中，您可以定义动作创建器来完成此任务。动作创建者只是一个返回动作的JavaScript函数。换句话说，动作创建者创建表示动作事件的对象。 </section>

## Instructions
<section id="instructions">定义一个名为<code>actionCreator()</code>的函数，该函数在调用时返回<code>action</code>对象。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 函数<code>actionCreator</code>应该存在。
    testString: assert(typeof actionCreator === 'function');
  - text: 运行<code>actionCreator</code>函数应该返回操作对象。
    testString: assert(typeof action === 'object');
  - text: 返回的操作应具有值为<code>LOGIN</code>的键属性类型。
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
// Define an action creator here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
