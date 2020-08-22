---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从Redux商店获取状态
---

## Description
<section id="description"> Redux存储对象提供了几种允许您与之交互的方法。例如，您可以使用<code>getState()</code>方法检索Redux存储对象中保存的当前<code>state</code> 。 </section>

## Instructions
<section id="instructions">上一个挑战中的代码在代码编辑器中更简洁地重写。使用<code>store.getState()</code>从<code>store</code>检索<code>state</code> ，并将其分配给新变量<code>currentState</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 对于初始状态，redux存储的值应为5。
    testString: assert(store.getState()===5);
  - text: 应该存在一个变量<code>currentState</code> ，并且应该为其分配Redux存储的当前状态。
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

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
