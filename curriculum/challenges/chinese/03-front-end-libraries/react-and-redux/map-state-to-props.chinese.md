---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将状态映射到道具
---

## Description
<section id="description"> <code>Provider</code>组件允许您为React组件提供<code>state</code>和<code>dispatch</code> ，但您必须准确指定所需的状态和操作。这样，您可以确保每个组件只能访问所需的状态。您可以通过创建两个函数来完成此任务： <code>mapStateToProps()</code>和<code>mapDispatchToProps()</code> 。在这些函数中，您可以声明要访问的状态段以及需要分配的操作创建者。一旦这些功能到位，您将看到如何使用React Redux <code>connect</code>方法在另一个挑战中将它们连接到您的组件。 <strong>注意：</strong>在幕后，React Redux使用<code>store.subscribe()</code>方法实现<code>mapStateToProps()</code> 。 </section>

## Instructions
<section id="instructions">创建一个函数<code>mapStateToProps()</code> 。此函数应将<code>state</code>作为参数，然后返回将该状态映射到特定属性名称的对象。您可以通过<code>props</code>访问这些属性。由于此示例将应用程序的整个状态保存在单个数组中，因此您可以将整个状态传递给组件。在要返回的对象中创建属性<code>messages</code> ，并将其设置为<code>state</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: const <code>state</code>应该是一个空数组。
    testString: assert(Array.isArray(state) && state.length === 0);
  - text: <code>mapStateToProps</code>应该是一个函数。
    testString: assert(typeof mapStateToProps === 'function');
  - text: <code>mapStateToProps</code>应该返回一个对象。
    testString: assert(typeof mapStateToProps() === 'object');
  - text: 将数组作为状态传递给<code>mapStateToProps</code>应该返回分配给<code>messages</code>键的数组。
    testString: assert(mapStateToProps(['messages']).messages.pop() === 'messages');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const state = [];

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
