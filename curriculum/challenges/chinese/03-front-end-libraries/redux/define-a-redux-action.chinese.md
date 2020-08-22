---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 定义Redux动作
---

## Description
<section id="description">由于Redux是一个状态管理框架，因此更新状态是其核心任务之一。在Redux中，所有状态更新都由调度操作触发。操作只是一个JavaScript对象，其中包含有关已发生的操作事件的信息。 Redux存储接收这些操作对象，然后相应地更新其状态。有时，Redux操作也会携带一些数据。例如，操作在用户登录后携带用户名。虽然数据是可选的，但操作必须带有<code>type</code>属性，该属性指定发生的操作的“类型”。将Redux操作视为信使，将有关应用程序中发生的事件的信息提供给Redux商店。然后，商店根据发生的操作开展更新状态的业务。 </section>

## Instructions
<section id="instructions">编写Redux操作就像声明具有type属性的对象一样简单。声明一个对象<code>action</code>并为其设置一个属性<code>type</code>设置为字符串<code>&#39;LOGIN&#39;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该存在一个操作对象。
    testString: assert((function() { return typeof action === 'object' })());
  - text: 该操作应具有值为<code>LOGIN</code>的键属性类型。
    testString: assert((function() { return action.type === 'LOGIN' })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Define an action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
