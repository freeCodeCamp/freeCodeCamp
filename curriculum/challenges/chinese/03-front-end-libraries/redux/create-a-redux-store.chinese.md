---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建一个Redux商店
---

## Description
<section id="description"> Redux是一个状态管理框架，可以与许多不同的Web技术一起使用，包括React。在Redux中，有一个状态对象负责应用程序的整个状态。这意味着如果您有一个包含十个组件的React应用程序，并且每个组件都有自己的本地状态，则应用程序的整个状态将由Redux <code>store</code>的单个状态对象定义。这是学习Redux时理解的第一个重要原则：Redux商店是应用程序状态的唯一真实来源。这也意味着，只要您的应用程序的任何部分想要更新状态，它<strong>必须</strong>通过Redux商店执行此操作。单向数据流可以更轻松地跟踪应用程序中的状态管理。 </section>

## Instructions
<section id="instructions"> Redux <code>store</code>是一个保存和管理应用程序<code>state</code>的对象。 Redux对象上有一个名为<code>createStore()</code>的方法，您可以使用该方法创建Redux <code>store</code> 。此方法将<code>reducer</code>函数作为必需参数。 <code>reducer</code>函数将在稍后的挑战中介绍，并且已在代码编辑器中为您定义。它只是将<code>state</code>作为参数并返回<code>state</code> 。声明一个<code>store</code>变量并将其赋值给<code>createStore()</code>方法，并将<code>reducer</code>作为参数传入。 <strong>注意：</strong>编辑器中的代码使用ES6默认参数语法初始化此状态以保存值<code>5</code> 。如果您不熟悉默认参数，可以参考<a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">课程</a>中涵盖此主题的<a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">ES6部分</a> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: redux商店存在。
    testString: assert(typeof store.getState === 'function');
  - text: redux商店的状态值为5。
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

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
