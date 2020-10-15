---
id: 5a24c314108439a4d403614b
challengeType: 6
forumTopicId: 301439
title: 创建一个 Redux Store
---

## Description
<section id='description'>
Redux 是一个状态管理框架，可以与包括 React 在内的许多不同的 Web 技术一起使用。
在 Redux 中，有一个状态对象负责应用程序的整个状态，这意味着如果你有一个包含十个组件且每个组件都有自己的本地状态的 React 项目，那么这个项目的整个状态将通过 Redux<code>store</code>被定义为单个状态对象，这是学习 Redux 时要理解的第一个重要原则：Redux store 是应用程序状态的唯一真实来源。
这也意味着，如果你的应用程序想要更新状态，只能通过 Redux store 执行，单向数据流可以更轻松地对应用程序中的状态进行监测管理。
</section>

## Instructions
<section id='instructions'>
Redux <code>store</code>是一个保存和管理应用程序状态的<code>state</code>，你可以使用 Redux 对象中的<code>createStore()</code>来创建一个 redux<code>store</code>，此方法将<code>reducer</code>函数作为必需参数，<code>reducer</code>函数将在后面的挑战中介绍。该函数已在代码编辑器中为你定义，它只需将<code>state</code>作为参数并返回一个<code>state</code>即可。
声明一个<code>store</code>变量并把它分配给<code>createStore()</code>方法，然后把<code>reducer</code>作为一个参数传入即可。
注意: 编辑器中的代码使用 ES6 默认参数语法将 state 的值初始化为<code>5</code>， 如果你不熟悉默认参数，你可以参考<a target="_blank" href="http://beta.freecodecamp.com/en/challenges/es6/set-default-parameters-for-your-functions"> ES6 全部课程</a>，它里面涵盖了这个内容。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: redux store 应当存在。
    testString: assert(typeof store.getState === 'function');
  - text: redux store 的 state 的值为 5。
    testString: assert(store.getState()=== 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux 方法可以从 Redux 对象获得
// 例如: Redux.createStore()
// 在这里定义一个 store



```

</div>



</section>

## Solution
<section id='solution'>


```js
const reducer = (state = 5) => {
  return state;
}

//Redux 方法可以从 Redux 对象获得
// 例如: Redux.createStore()
// 在这里定义一个 store:

const store = Redux.createStore(reducer);
```

</section>
